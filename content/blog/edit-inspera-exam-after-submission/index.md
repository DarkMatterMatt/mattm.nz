---
title: Editing Inspera exam answers after submission
description: Detailing vulnerabilities that allow students to edit their answers after the examination period ends.
updatedAt: 2022-11-03
---

Inspera is "a cloud-based digital assessment platform enabling [educators] to
plan, author, deliver and mark assessments in one place" [[1]]. Their website says that they are "tested
regularly by external parties, such as third parties conducting penetration tests and regular
audits" [[2]]. Despite this, there are critical
vulnerabilities that allow students to edit answers after the examination period ends.

## Embedding live images

Students are able to drag and drop images into their answers, which embeds the image URL in the
submission. To exploit this, students can add images hosted on a server they control and change the
image being served at a later date.

The exam submission is saved using XML and looks like this. It would be interesting to know if
scripts run in the exam marker's browser.

```xml
<itemResult identifier="99999999" sequenceIndex="10" datestamp="2022-11-02T99:99:99Z" sessionStatus="pendingSubmission">
  <responseVariable identifier="numAttempts" cardinality="single" baseType="integer"><candidateResponse>
    <value>1</value>
  </candidateResponse></responseVariable>
  <responseVariable identifier="duration" cardinality="single" baseType="duration"><candidateResponse>
    <value>35</value>
  </candidateResponse></responseVariable>
  <responseVariable identifier="RESPONSE" cardinality="single" baseType="string"><candidateResponse>
    <value>&lt;p>&lt;img src="https://redacted.com/random_image/" />&lt;/p></value>
  </candidateResponse></responseVariable>
</itemResult>
```

The following image demonstrates the ease of exploitation. In this example, the image is randomly
generated every time it is loaded. This would normally be a static image containing answers that can
be changed in the future.

<blog-video src="changing-image.mp4" emulate-gif>
  Inspera stores the image URL instead of taking a snapshot of the embedded image.
</blog-video>

A trivial solution would be to convert the image to a data URI when embedded. This would make an
immutable copy of the image when it is copied into the exam and remove any links to external
resources.

## Editing offline submission files

If a student's internet connection fails, they are able to download their submission to submit
later when their connection is restored. This submission package is encrypted so that, in theory,
the submission cannot be tampered with or entered under another student's name.

The student's browser must have access to the encryption key so it can encrypt the file offline. This
key can be extracted and used to decrypt and re-encrypt the offline submission at any point before it
is sent to the exam administrators. Inspera calls the encryption key a `fileSaveKey`. It can be retrieved
from the following location: `InsperaPlayer.storeManager.getState().session.sessionInfo.fileSaveKey`.

The code used to perform this encryption looks like this. It uses PBKDF2 to generate a 128-bit key
from the `fileSaveKey`. I'm not sure why they don't just use the `fileSaveKey` since it is the right
length already, and doing two iterations of PBKDF2 isn't going to slow an attacker down.

```js
// Inspera uses the CryptoJS library, https://cryptojs.gitbook.io.
import aes from 'crypto-js/aes';
import hex from 'crypto-js/enc-hex';
import pbkdf2 from 'crypto-js/pbkdf2';
import encBase64 from 'crypto-js/enc-base64';

function encryptDelivery(deliveryObject, fileSaveKey) {
  const iv = hex.parse('F27D5C9927726BCEFE7510B1BDD3D137');
  const salt = hex.parse('3FF2EC019C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A55');
  const key = pbkdf2(fileSaveKey, salt, { keySize: 4, iterations: 2 });

  const data = JSON.stringify(deliveryObject);
  const encrypted = aes.encrypt(data, key, { iv });
  return encrypted.ciphertext.toString(encBase64);
}
```

We can easily write the decryption function.

```js
// Import the same functions as before and add CryptoJS's UTF-8 encoder.
import encUtf8 from 'crypto-js/enc-utf8';

function decryptDelivery(base64Encrypted, fileSaveKey) {
  const iv = hex.parse('F27D5C9927726BCEFE7510B1BDD3D137');
  const salt = hex.parse('3FF2EC019C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A55');
  const key = pbkdf2(fileSaveKey, salt, { keySize: 4, iterations: 2 });

  const encrypted = { ciphertext: encBase64.parse(base64Encrypted) };
  const data = aes.decrypt(encrypted, key, { iv });
  return JSON.parse(data.toString(encUtf8));
}
```

The decrypted data is a JSON file in the following format. Each `itemResult` string is XML in the
format described earlier.

```ts
interface DeliveryObject {
  assessmentRunId: number;
  candidateId: string;
  deliveryMode: string;
  itemResults: {
    contentRevisionId: number;
    itemResult: string(XML);
    avoidStoring: boolean;
  }[];
  startTime: Date;
  timeOffset: string;
  timestamp: Date;
  userId: number;
}
```

From here, modifying the submission and re-encrypting it in the correct format is simple. This
modified file can be given to exam administrators at a later date, when the student chooses to
reconnect to the internet. The University of Auckland states that offline exams must be submitted
within one week of the exam date [[3]].

## Inspera Exam Portal & Inspera Smarter Proctoring

Inspera offers two products for increased restrictions and security: Inspera Exam Portal (IEP),
previously known as the Safe Exam Browser, and Inspera Smarter Proctoring (ISP).

It is likely that the first vulnerability is only possible in exams with unrestricted browsers
because access to external sites can be disabled when using IEP and ISP.

Modifying the offline submission is more difficult when using IEP or ISP, but [Heintz (2017)][4]
showed that it is possible to bypass the anti-tamper protections in IEP. If a student routed their
network traffic through a proxy, it would be possible to start the exam using a modified exam
client, allowing them to retrieve the `fileSaveKey` in order to edit their offline submission.

## Conclusion

This post detailed two vulnerabilities in the online examination service provided by Inspera.
Embedding live images is patchable and has limited impact, but it is not possible to prevent the
modification of offline submissions. The only way to ensure the integrity of exam submissions is
to have students sit their exams in person just like a written/pre-digital exam.

## Disclosure timeline

- 2021-06-15: Found vulnerabilities.
- 2021-06-17: Contacted Inspera.
- 2021-06-18: Escalated within Inspera, received a response from the CTO acknowledging the
  vulnerabilities. They said that Inspera would look into disabling drag and drop functionality for
  images, and suggested using Inspera's remote proctoring solution to record the student's screen
  for the entire session.
- 2022-11-03: Public disclosure.

## References

<blog-undecorated-links>

1. [Inspera. (2022). *Online assessment for education and certification*.][1]
2. [Inspera. (2021). *Cloud Security Statement*.][2]
3. [University of Auckland. (2021). *Support during your Inspera exam*.][2]
4. [Heintz, A. (2017). *Cheating at digital exams-vulnerabilities and countermeasures*.][4]

</blog-undecorated-links>

[1]: https://inspera.com
[2]: https://www.inspera.com/legal/security
[3]: https://cdn.auckland.ac.nz/assets/auckland/students/academic-information/exams-and-final-results/online-exams/student-support-for-inspera-exams.pdf
[4]: https://ntnuopen.ntnu.no/ntnu-xmlui/bitstream/handle/11250/2460113/12292_FULLTEXT.pdf

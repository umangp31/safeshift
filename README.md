# SafeShift: Content Sharing Platform with NSFW Detection


SafeShift is a content sharing platform built with Lens social graph that puts safety and user experience first. Leveraging the power of the Phala network and Phat contracts, SafeShift ensures that all shared content is scanned for NSFW (Not Safe for Work) content before it's posted to the Lens Protocol. If any NSFW content is detected, the post is automatically reverted to maintain a safe and respectful online environment.

## Table of Contents

- [Introduction](#introduction)
- [Architechture](#architechture)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Additional Links](#additional)

## Introduction

SafeShift is a project developed for the PhalaXLensxD_D Hackathon. Our mission is to create a secure and welcoming space for content sharing, where users can confidently share text and images without the fear of encountering NSFW content.

With SafeShift, we aim to address the growing concerns related to online safety and privacy by implementing advanced NSFW content detection powered by TensorFlow.js and the robustness of Rust-based Phat contracts. Whether you want to share a funny meme or a thoughtful message, SafeShift ensures a clean and respectful environment for all.

## Architechture
![Architechture](https://safeshift.vercel.app/archi.png "a title")

## Key Features

- **NSFW Content Detection**: Utilizing TensorFlow.js, SafeShift scans text and images to detect NSFW content and automatically prevents its posting.

- **Phala Network Integration**: SafeShift leverages the Phala network for secure and efficient content processing leveraging the decentralize compute ensuring it's always up.

- **User-Friendly Interface**: Frontend built with Next.js ensures an intuitive and visually pleasing user experience, with Shadcn for consistent styling.

## Technologies Used

SafeShift is built with a powerful stack of technologies:

- **Next.js**: A React framework for building user interfaces.

- **ShadCN**: A CSS framework for styling the application.

- **Rust**: Used for developing Phat contracts, ensuring secure content handling.

- **TensorFlow.js**: Employed for NSFW content detection and filtering.

- **Lens Protocol**: The Social Graph of Web3

- **IPFS**: The Decentralized storage layer,where all the content is being stored.

## Live Link

You can access the live Safeshift platform [here](https://safeshift.vercel.app/).


## Usage

1. Login to SafeShift  via your Lens Profile.

2. Create a new post by uploading an image or entering text.

3. SafeShift will automatically scan the content for NSFW elements.

4. If NSFW content is detected, the post will be reverted. Otherwise, it will be published to Lens for others to see.

5. Enjoy a safe and respectful content sharing experience!

## Future Plans

We have exciting plans for the future of Safeshift, including:

- **Enhanced NSFW Detection**: Continuously improving our NSFW content detection algorithms to ensure even better accuracy and safety.

- **Support Video Content**: We will be supporting the video upload with nsfw scanning for better content sharing.

- **Feedback and Suggestions**: We value your feedback and are open to suggestions from the Safeshift community. Let us know what features you'd like to see!

Stay tuned for these exciting developments as we work to make Safeshift an even better platform for secure and respectful content sharing.


## License

SafeShift is licensed under the [MIT License](LICENSE).

## Additional Links

[Backend Repo](https://github.com/VIVEK-SUTHAR/phala_check_nsfw_backend)
[Phat Contract](https://github.com/VIVEK-SUTHAR/lens-detect-nsfw)

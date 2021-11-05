# Why is Everything Insecure?

## Premise

All too often we hear about hacks, malware, datacenters and sensitive information held ransom for large sums of bitcoin.  Why?   Why is it that security, trust, and privacy haven't yet been foundationally etched into every product offering, platform, backend, frontend and middleware that we take for granted every day?

I seek to understand the drivers for what I'm going to call: insecure-by-default.

## Drivers

There are some drivers that I think are key to getting to grips with common security practices in today's (2021's) technology ecosystem.

- Software/Hardware is shipped non-hardened
- Complexity of Security
- Modern Leadership Cultures

## Shipping Unhardened

Run `install.exe` or `<your favorite package manager> install this_or_that` and still more often than not, you get a chunk of software that needs A LOT of work to secure properly.

Why is software shipped this way?  For starters, it's commonly felt that not everyone needs it shipped secured - desktop software, or open-source packages are often quickly deployed onto desktops or development enviroments to prototype things.  The time-spend to setup security and trusts every time you want to try something is a challenge and will turn off many users, leading to reduced market share for your product. 

"It Just Works", or "Keep It Simple Stupid" still dominates the mentality of creators and developers.  Technology often advances through reductionism and simplification after adding complexity.

Where do we go from here?  Well, you don't get more customers by stonewalling them with additional complexity.  Simplification is beneficial, so we need to question and address the complexities of making securing everything by default.

## Complexity of Security

Even the topic itself is complex - there are many aspects to designing, developing and running a 'secure' thing.  As technology builds upon itself through iterations of adding design complexity then and reductionist refactoring of those complex approaches into repeatable simple patterns, the security-conscious individual finds layers of abstraction built upon older layers of abstraction.  


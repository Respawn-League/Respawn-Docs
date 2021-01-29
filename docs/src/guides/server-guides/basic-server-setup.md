# Basic Self-Hosted Server Setup

As stated on our Hub page, you can rent a server from a gameserver provider or "reseller". This route is usually the easiest and has all of the basic features you would need. However if you are feeling dangerous, you can set up your own on dedicated hardware or a VPS. Below is a few guides and references on how to setup a server with everything you need for it to be league complaint.

Essential:

- [Valve guide: Windows server setup](https://wiki.teamfortress.com/wiki/Windows_dedicated_server)
- [Valve guide: Linux server setup](https://wiki.teamfortress.com/wiki/Linux_dedicated_server)

Recommended:

- [spiretf Docker image: Competitive Server](https://hub.docker.com/r/spiretf/docker-comp-server) (contains logs.tf, demos.tf, twiikuu's comp-fixes and every other essential plugin)

Required server plugin (if you are manually installing them):

- SourceMod
- MetaMod
- [logs.tf and its dependencies](https://www.teamfortress.tv/13598/)
- STV Record (can be found on the logs.tf page)

This page, as stated above, is only a small list of resources you can use to setup your own server. We don't offer support outside issues with our configs or whitelists, however a quick Google would allow you to resolve most, if not all the issues you could run into during this process.
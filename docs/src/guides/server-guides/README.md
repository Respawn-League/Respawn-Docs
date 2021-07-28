# Server Guide Hub

## Bookable Servers
For more information about using Bookable Servers, see our Using a Bookable Server page!

## Self-Hosted Servers
It is important to preface this documentation with the following note. **You MUST seek league administrator approval for usage of a self-hosted server for official matches. Failure to do so will result in penalty.**

We have received a plethora of questions over the past few years regarding how to setup a game server, what the requirements are and if you can "self host" your own server. Below are some basic guidelines on server requirements when not using a bookable server from an existing bookable provider (Qixalite, serveme.tf, ozfortress, PURE League, etc.):

- Servers should not be hosted on a residential connection, no matter how good. The issue isn't always the available bandwidth or network speed, but the fact that residential connections typically aren't protected from DOS attacks or other forms of malicious activity.
- Server should be hosted within the region you play in.
- You can either rent a server off of a game server provider (Streamline Servers, Wombat Servers, etc.) or setup your own on a high-performance VPS or Dedicated Server.
- If you intend on using your own self-hosted server for official matches, your server and league configs should meet the same standards as our own configs, found in our [GitHub](https://github.com/Respawn-League/Respawn-Configs/tree/master/match-configs) repository.
- Plugins outside of logs.tf, TF2 Competitive Fixes, STV Demo Record, RestoreScore and the Uber Pause fix aren't permitted under any circumstance. This is including but not limited to plugins that; modify gameplay, server to client interaction, server based Anti-Cheat plugins, or plugins that violate CVARs set by our league configs (forced thirdperson killcams for example).

If you are unsure where your hosted server falls, feel free to contact a League Administrator.

Staff will not however offer support or resolve technical server issues for you. **You are own your own with server setup, maintenance and administration.**
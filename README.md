# Bossett's little feed collection

Playing around with Bluesky's custom feeds. Very basic - just a small iteration on the template for the moment, to grab a user list, and then look for specific terms in posts from those users.

## Science Feed

Watches for 🧪 posted by people on a set of watchlists (e.g. https://bsky.app/profile/did:plc:jfhpnnst6flqway4eaeqzj2a/lists/3jx3w32axax2f)

Feed at https://bsky.app/profile/did:plc:jfhpnnst6flqway4eaeqzj2a/feed/for-science

## Major TODOs

At the moment, there isn't persistent storage - so need to set up something like redis to grab posts and manage the feed. As-is, the feed is wiped with every deployment, and it then re-fetches historic stuff every few minutes which isn't ideal.
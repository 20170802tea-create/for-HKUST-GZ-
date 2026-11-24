---
layout: doc
title: Behringer WING Setup & Troubleshooting
sidebar: false
---

# Behringer WING Digital Mixer

The **Behringer WING** is a 48-channel digital mixing console used for live sound and studio recording. Unlike older mixers, it separates **Sources** (physical plugs) from **Channels** (the faders you mix with).

## Setup

1. **Power and clock check:** Turn on the WING and open **SETUP → Audio**. Set the sample rate to **48 kHz** and set **Sync Source** to **Internal** if the WING is the main mixer.
2. **Plug in your inputs:** Connect microphones or instruments to the local XLR inputs on the back, or connect a digital stage box (like an S32) to **AES50 A** using a shielded CAT5e/CAT6 EtherCON cable.
3. **Patch Sources to Channels:**
   - Press the **ROUTING** button on the console.
   - Select **Inputs** (Sources) and pick your input group (Local In or AES50 A).
   - Assign your mic or instrument Sources to Channels on your fader bank.
4. **Set gain and phantom power:** Select a channel, turn up the preamp **Gain** until the meter sits in the green/yellow range, and turn on **+48V** only for condenser mics or active DI boxes.
5. **Patch Outputs:** In **ROUTING → Outputs**, tap the **Unlock** icon, route your **Main** mix (or buses) to your speaker outputs (or **USB Audio** for computer recording), and tap **Lock** again when done.

## Troubleshooting

::: tip Problem: No sound from a mic or stage box
**What went wrong:** On the WING, plugging into an XLR jack doesn't automatically put it on a fader—or a condenser mic might not have +48V power.

**How to fix it:**
1. Press **ROUTING** and check that the physical **Source** is actually patched to the **Channel** you are turning up.
2. Check that the channel isn't **Muted** and the main fader is pushed up.
3. If it's a condenser mic, turn on **+48V** on that Source.
:::

::: warning Problem: Pops, clicks, dropouts, or no preamp control over AES50
**What went wrong:** The digital clock between the WING and the stage box isn't synced, or the Ethernet cable is unshielded or too long.

**How to fix it:**
1. Go to **SETUP → Audio** on the WING and set **Sync Source** to **Internal** (and **48 kHz**).
2. On stage boxes like an S16 or DL16, check that the **SA MASTER** / **SN MASTER** LED is off so the stage box follows the WING's clock.
3. Use a grounded, shielded EtherCON CAT5e/CAT6 cable (keep runs under 100 meters).
:::

::: tip Problem: Routing screen won't let me change an output
**What went wrong:** The output patch is locked by default so you don't accidentally unplug your speakers mid-show.

**How to fix it:** On the **ROUTING → Outputs** screen, tap the **Unlock** icon at the top, make your output changes, and tap **Lock** again to keep them safe.
:::

::: tip Problem: USB recording to my computer isn't working or sounds glitchy
**What went wrong:** The sample rate doesn't match between the WING and your recording software, or the cable is going through a USB hub.

**How to fix it:** Plug the **USB-B** port on the back of the WING directly into your computer (no hub), and make sure both the WING (**SETUP → Audio**) and your DAW are set to the same sample rate (**48 kHz** or **44.1 kHz**).
:::

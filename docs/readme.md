
# Behringer WING — Live Performance Guide

The **Behringer WING** is a 48-channel digital mixing console built for live sound. Because it separates **Sources** (where cables plug in) from **Channels** (the faders you mix), you can patch a whole band from a stage box over one cable and save your show settings in snapshots.

## Live Setup

1. **Turn on the WING**, open **SETUP → Audio**, set the sample rate to **48 kHz** (best for low live latency), and set **Sync Source** to **Internal**.
2. **Connect the stage box:** Run a shielded CAT5e/CAT6 EtherCON cable (under 100 meters) from **AES50 A** on the WING to your digital stage box (like an S32 or DL16).
3. **Patch stage inputs to channels:**
   - Press **ROUTING** and select **Inputs** (Sources).
   - Pick **AES50 A** from the drop-down menu and assign each mic/instrument Source to a mixing Channel.
   - Name and color-code your channels (Vocals, Drums, Guitar) so you can find them fast during the show.
4. **Patch Main PA and stage monitors:**
   - Open **ROUTING → Outputs** and tap **Unlock**.
   - Route **Main L/R** to your PA speaker outputs (usually the last two XLR outputs on the stage box or console) and your monitor **Buses** to stage wedge outputs or P16 personal mixers (AES50 outputs 33–48 automatically feed Ultranet/P16).
   - Tap **Lock** when done so nobody accidentally changes speaker routing mid-show.
5. **Line check and gain staging:** Turn on **+48V** only for condenser mics and active DI boxes, set preamp **Gain** so loud hits stay in the green/yellow (not red), and save a **Snapshot** in **LIBRARY** before doors open.

## Troubleshooting

A. Problem: Loud screeching feedback from stage mics
**What went wrong:** A microphone is picking up sound from a stage/ear monitor or the main PA speakers and looping it.

**How to fix it:**
1. Pull down the fader on the ringing mic or monitor bus right away.
2. Point stage monitors away from the front of the mics (place wedges directly behind directional mics).
3. Turn on the **High-Pass Filter (HPF)** on vocal mics and use the channel or bus **EQ** to notch down the exact frequency that is ringing.


B. Problem: No sound from a mic or instrument on stage
**What went wrong:** On the WING, plugging into a stage box XLR doesn't automatically put it on a fader, or +48V phantom power is off.

**How to fix it:**
1. Press **ROUTING** and make sure the stage box **Source** is actually patched to that **Channel**.
2. Check that the channel isn't **Muted**, its fader is up, and it is assigned to **Main**.
3. If it's a condenser mic or active DI box, turn on **+48V** on that Source.


C. Problem: Pops, clicks, dropouts, or no preamp control over AES50
**What went wrong:** The digital clock between the WING and the stage box isn't synced, or the EtherCON cable is unshielded or too long.

**How to fix it:**
1. Check **SETUP → Audio** on the WING: set **Sync Source** to **Internal** and **48 kHz**.
2. On S16/DL16 stage boxes, make sure the **SA MASTER / SN MASTER** LED is off so the stage box follows the WING's clock.
3. Swap to a grounded, shielded EtherCON CAT5e/CAT6 cable in a suitable distance.


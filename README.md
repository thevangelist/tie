# Tie - Typeface Conversion of The Finnish Traffic Sign Typeface based on Original Image Sources

## Preface

The Finnish traffic sign typeface contains a lot of errors and problems. I ended up asking about the typeface used for upcoming renewed signs from Liikennevirasto, and the conversation in Twitter lead to a CC0 release of the original typeface drawn in 1960's.

*Tie*  is a typeface conversion of the original Finnish traffic sign typeface that is available at [Liikennevirasto page](https://www.liikennevirasto.fi/avoindata/tietoaineistot/liikennemerkkien-kirjasintyyppi).

![Example of Stop Sign with -45 spacing](./examples/stop.png "Example of Stop Sign with -45 spacing")

## Conversion

The conversion was made using *Adobe Illustrator*, by defining the x-height, cap height, ascender height and descender height based on the following letters:

```
dxHP
```

the method is described in a tutorial [video on YouTube](https://www.youtube.com/watch?v=gC9g-1PttJ0).

After that, the letters were copied one by one to *Glyphs* app and scaled with same proportions.

Spacing of the typeface is pretty much still on-going work - As these decisions should be tested thoroughly with a real audience.

## Observations made during the conversion

* Intriguingly, *the cap height and the ascender height are the same*.
* Originals, especially the lower-case ones, contain a lot of artefacts, and is not clear how to fix them.

### Problems fixed

I was brave enough to fix some of the problems that exist in the original typeface

* Letters `a, å, ä and y` had some artefacts, so I removed them
* Spacing (still pretty much WIP)

## Existing problems and issues (TODO)

* Artefacts from the originals
* Spacing and kerning is guesswork
* Design is not pretty
* Design doesn't work well for traffic signs, as the glyphs become interchangeable when seen from a distance. [See article](https://typography.guru/journal/designing-the-ultimate-wayfinding-typeface-r30/)
* Missing a LOT of glyphs
* `parenleft`, and `parenright` seem like they are originally from another typeface (should have a thicker stroke)
* Some curves aren't curves - they have angular shapes
* Human visual perception should be compensated with adding an overshoot (=placed below the baseline) to letters such as the letter `o`.

### _TLDR: *Not very well suitable for the traffic sign system at all*_
# Tie - Font Conversion of The Finnish Traffic Sign Typeface

*...Based on the original images still used for traffic sign designs!*

## Preface

The Finnish traffic sign typeface contains a lot of errors and problems. I ended up asking about the typeface used for upcoming renewed signs from Liikennevirasto, and the conversation in Twitter lead to a CC0 release of the original typeface drawn in 1960's.

*Tie*  is a typeface conversion of the original Finnish traffic sign typeface that is available at [Liikennevirasto page](https://www.liikennevirasto.fi/avoindata/tietoaineistot/liikennemerkkien-kirjasintyyppi).

![Example of Stop Sign with -45 spacing](./examples/stop.png "Example of Stop Sign with -45 spacing")

## Repository contents

```
├── README.md
├── Tie-Regular.glyphs     > Glyphs editable version of the typeface
├── examples               > Example images
├── fonts                  > Distributable fonts (OTF, WOFF)
└── wordlists              > Wordlists for testing the typeface
```

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
* Some curves aren't curves - they have angular shapes

### _TLDR: *Not very well suitable for the traffic sign system at all*_

## Major improvement ideas - How to make Tie actually work for traffic signs

* Design is not pretty by the standards of modern typography
* Design doesn't work well for traffic signs, as the glyphs become interchangeable when seen from a distance.
* Missing a LOT of glyphs
* `parenleft`, and `parenright` seem like they are originally from another typeface (should have a thicker stroke)
* Human visual perception should be compensated with adding an overshoot (=placed below the baseline) to letters such as the letter `o`.
### Potential benchmarks (Some european wayfinding typefaces)

* Tratex
* Dansk Vejtavleskrift
* British Road Alphabet
* DIN1451

### Articles

* [Liikennemerkkipiirustukset](https://julkaisut.liikennevirasto.fi/thohje/pdf/liikennemerkkipiirustukset_osa2_19092013.pdf)
* [Opastemerkkien Luettavuus - Tiehallinto (2005)](https://julkaisut.liikennevirasto.fi/pdf/3200927-vopastusmerkkienluettavuu.pdf)
* [Tobias Frere-Jones' Retina Typeface for Maximum Legibility of The Wall Street Journal](http://www.howdesign.com/design-business/design-news/retina-typeface-frere-jones-type/)
* [Designing the ultimate Wayfinding Typeface](https://typography.guru/journal/designing-the-ultimate-wayfinding-typeface-r30/)

## Acknowledgements

This is a pro-bono hobby project. If you have any suggestions or wish to contact me, you can create an issue on the repo.
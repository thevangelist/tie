# Tie - Font Conversion of The Finnish Traffic Sign Typeface

*...Based on the original images still used for traffic sign designs!*

## Tiivistelmä Suomeksi

Suomalaisissa liikennemerkeissä käytetyn kirjasintyypin fontti-konversio alkuperäisten kuvien pohjalta. Ks. [Wikipedia](https://fi.wikipedia.org/wiki/Liikennemerkit_Suomessa).

![Example of STOP Sign with standard spacing](./examples/stop.png "Example of STOP Sign with standard spacing")

## Preface

The Finnish traffic sign typeface contains a lot of errors and problems. I ended up asking about the typeface used for upcoming renewed signs from Liikennevirasto, and the conversation in Twitter lead to a CC0 release of the original typeface drawn in 1960's.

*Tie*  is a typeface conversion of the original Finnish traffic sign typeface that is available at [Liikennevirasto page](https://www.liikennevirasto.fi/avoindata/tietoaineistot/liikennemerkkien-kirjasintyyppi).

## Usage / Installation

1. Download the .OTF and .WOFF versions from the [/fonts folder of this repository](./fonts)
2. Drag-n-drop / copy the downloaded files to *Font Book* (on OSX) / *Fonts (Control Panel)* (on Windows)
3. Open your preferred text / visual editor and start making your own traffic signs

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

Spacing of the typeface was done using the original [spacing tables, from page 287->](https://julkaisut.liikennevirasto.fi/thohje/pdf/liikennemerkkipiirustukset_osa2_19092013.pdf).

Kerning tables aren't done, as I felt a bit unmotivated since the original kerning is somewhat bad.

## Observations made during the conversion

* Intriguingly, *the cap height and the ascender height are the same*
* Originals, especially the lower-case ones, contain a lot of artefacts, and is not clear how to fix them

### Problems fixed

I was brave enough to fix some of the problems that exist in the original typeface

* Letters `a, å, ä and y` had some artefacts, so I removed them
* Spacing (still pretty much WIP)
* Semicolon spacing is taken from colon
* Colon spacing is taken from from period
* ! spacing is from capital I
* ? spacing is from capital S

## Existing problems and issues (TODO)

* Artefacts from the originals should be removed and fixed
* Kerning is not done (feel free to contribute, the information exists is [on page 293->](https://julkaisut.liikennevirasto.fi/thohje/pdf/liikennemerkkipiirustukset_osa2_19092013.pdf))
* Some curves aren't curves - they have angular shapes
* Missing: Cyrillics and their spacing, [from page 298->](https://julkaisut.liikennevirasto.fi/thohje/pdf/liikennemerkkipiirustukset_osa2_19092013.pdf)

## Major improvement ideas - How to make Tie actually work for traffic signs

* Design is not pretty by the standards of modern typography
* Design doesn't work well for traffic signs, as the glyphs become interchangeable when seen from a distance
* Missing a LOT of glyphs
* `parenleft`, and `parenright` seem like they are originally from another typeface (should have a thicker stroke)
* There seems to be multiple originals, `parenleft` & `parenright` are good examples of these, [compare with the traffic sign example](https://www.flickr.com/photos/liikennevirasto/22534979571/in/album-72157658087418073/)
* Human visual perception should be compensated with adding an overshoot (=placed below the baseline) to letters such as the letter `o`.
* Add support to more glyphs
* Add arrows and other signs used in the Finnish traffic signs to the typeface itself *as ligatures*, so they can be used whilst using the typeface itself
* Missing different weights and styles (this could improve readability depending on the context)

### _TLDR: *Not very well suitable for the traffic sign system at all*_

## Potential benchmarks (Some european wayfinding typefaces)

* Tratex
* Dansk Vejtavleskrift
* British Road Alphabet
* DIN1451

## References

* [Liikennemerkkipiirustukset](https://julkaisut.liikennevirasto.fi/thohje/pdf/liikennemerkkipiirustukset_osa2_19092013.pdf)
* [Liikennevirasto on Flickr (lots of traffic signs)](https://www.flickr.com/photos/liikennevirasto/albums/with/72157660385178002)
* [Opastemerkkien Luettavuus - Tiehallinto (2005)](https://julkaisut.liikennevirasto.fi/pdf/3200927-vopastusmerkkienluettavuu.pdf)
* [Tobias Frere-Jones' Retina Typeface for Maximum Legibility of The Wall Street Journal](http://www.howdesign.com/design-business/design-news/retina-typeface-frere-jones-type/)
* [Designing the ultimate Wayfinding Typeface](https://typography.guru/journal/designing-the-ultimate-wayfinding-typeface-r30/)

## More Examples

### All glyphs
![All](./examples/all.png "All glyphs")

###

## License

[CC0](LICENSE)

## Contributing

Make a PR.

## Acknowledgements

This is a pro-bono hobby project. If you have any suggestions or wish to contact me, you can create an issue on the repo.
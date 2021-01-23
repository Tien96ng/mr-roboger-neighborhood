# _Welcome to Mr. Roboger's Neighborhood_

#### _{Short Description Placeholder}_

#### By _**Tien Nguyen**_

## Technologies Used
* _HTML5_
* _CSS3_
* _Bootstrap 4.5_
* _jQuery 3.1_

## Description
_{Full Description Placeholder}_

## Setup/Installation Requirements
* _(No installations required.)_
* _Clone the Repo or simply download the repo as a zip._

_If neither option is appeal, please view the live project [here](https://tien96ng.github.io/mr-roboger-neighborhood/)!_

## Test Specs
**Describe: beepBoop()**
Test: Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
Expect(beepBoop(3).toEqual([0, 1, 2, "Won't you be my neighbor?"]);

Test: Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Expect(beepBoop(2).toEqual([0, 1, "Boop!", "Won't you be my neighbor?"]);

Test: Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Expect(beepBoop(1).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?"]);

Test: User enters the number 13.
Expect(beepBoop(13).toEqual(
  [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);

## Known Bugs
* _{Known Bugs Placeholder}_



## License
_This software is licensed under the MIT license_

Copyright (c) 2020 __Tien Nguyen__

## Contact Information
_<Tien96ng@github.com>_
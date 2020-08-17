---
title: "Using a Clean Formatter for Ruby Testing"
date:  2019-07-20T00:00:00.000Z
description: Testing is the pinnacle of development, when you develop in a MVC model the controllers expect unit tests to prove it works as expected. Many of these libraries for Ruby are of the likes of Minitest, RSpec and many more.
img: https://res.cloudinary.com/practicaldev/image/fetch/s--Typ8xPTJ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://res.cloudinary.com/practicaldev/image/fetch/s--qpC9sS5C--/c_imagga_scale%2Cf_auto%2Cfl_progressive%2Ch_420%2Cq_auto%2Cw_1000/https://thepracticaldev.s3.amazonaws.com/i/8cnkwd8af4m7h41rwoo0.png
img_alt: Simplecov Material Preview
layout: post
collection: posts
categories:
  - ruby
  - simplecov
  - material
read_time: 4
user: Christopher Pezza
user_img: https://media-exp1.licdn.com/dms/image/C5603AQHAdiHsxQdm8Q/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=AE90p2YGcmy-oozt7L-3WAFCsoLq37kZQBHIDW_Mrnc
user_url: https://chris-pezza.com
---

Testing is the pinnacle of development, when you develop in a MVC model the controllers expect unit tests to prove it works as expected. Many of these libraries for Ruby are of the likes of [Minitest](https://github.com/seattlerb/minitest), [RSpec](https://github.com/rspec/rspec) and many more.

With Ruby, a common library used to see what the outputed code coverage is, is [Simplecov](https://github.com/colszowka/simplecov). This tool is one I love, shows you what lines are covered, what was missed, and what you have defined as skipped. You also have the ability to configured many other settings. One of those settings is the formatter. You can describe one or many, out of the box comes a HTML Formatter that produces a webpage found in the coverage/index.html. This has been a format I have lived by for years but as I have used it on large projects with large file sets and long file names, it has not been the cleanest UX to work with. I have found it to be outdated and needing to be upgraded.

With that, I decided to go to the drawing board to design and build a new UX for a HTML web output that leveraged the new standards of [Material Design](https://material.io/). I analyzed what worked and what didn't with the HTML Formatter offered and concluded the following.

The Goods
  - Ability to search files in a group.
  - Ability to see groups.

The Bads
  - When groups get over 6 in total it starts to cause the page to look weird.
  - When file name get long and screen is small rows fall off of table view and become unreadable.
  - Difficult to read coverage per file and per group.
  - Scrolling on a file view could scroll past the file if your cursor was in the wrong spot.
  - When viewing an individual file source you really didn't know what file you clicked on or what the details were about that file without closing the modal to view the table.

I knew that I had to maintain a singular page generation to ensure not to many dependency files were needed when generating. This led me to move away from a tabular approach and more for a left navigation approach. This would allow for a scrollable user interaction. I also looked to move the sentence about the numbers, which was to much and hard to read. So I looked to change that to a tile grid at the top of each group page. There were little changes that will be noticed throughout the page such as, the footer is cleaner, the name of the project is displayed with dashes and underscores stripped out, the text for a file is cut off with ellipses in the table to ensure rows adhere to column width appropriately. From a repo structure I looked to implement and use Webpack to generate the output application js and css files for usage.

The results are as follows with a before ([simplecov-html](https://github.com/colszowka/simplecov-html)) and after ([simplecov-material](https://github.com/chiefpansancolt/simplecov-material])).

## Before (simplecov-html)

### Full View

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--StDZIsR6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/0vj2dzy2k6khtmtpfb26.png"/>

### Individual File View

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_O1H_AfM--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/qjxsb759t8tmlf5yb9x1.png" />

## After (simplecov-material)

### Full View

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--4Zwt21Nf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/66keo0thbrmg7cse5wy6.png" />


### Individual View

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--lFq_-C-l--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/f8buhic7vca3ka3z7a22.png" />

As seen above the look is drastically different in styles, but still maintains the same data, and functionality prior and some. I hope to expand the functionality based on community feedback overtime so please if you have any feedback checkout the repo [here](https://github.com/chiefpansancolt/simplecov-material) and leave your comments under the following:

- [Bug](https://github.com/chiefpansancolt/simplecov-material/issues/new?assignees=chiefpansancolt&labels=bug%2C+new&template=bug_report.md&title=)
- [Feature Request](https://github.com/chiefpansancolt/simplecov-material/issues/new?assignees=chiefpansancolt&labels=enhancement%2C+new&template=feature-request.md&title=Feature+Request)
- [Question](https://github.com/chiefpansancolt/simplecov-material/issues/new?assignees=&labels=new%2C+question&template=question.md&title=Question)

Thank you for taking the time to read this on the approach I took to develop [Simplecov Material](https://github.com/chiefpansancolt/simplecov-material) Formatter and hope you love it as much as I do! It's just so clean and easy to use!!

To use this gem simply install the gem in your repo by adding to your gemfile. This gem is hosted on [rubygems.org](https://rubygems.org/gems/simplecov-material) and on the new [Github Registry](https://github.com/chiefpansancolt/simplecov-material/packages)

To add to your gemfile see below or checkout the [Readme.md](https://github.com/chiefpansancolt/simplecov-material/blob/master/README.md) on the repo for reference

## Ruby Gems Host

```ruby
# ./Gemfile

group :test do
  gem "simplecov"
  gem "simplecov-material"
end
```

## Github Rubygems Host

```ruby
# ./Gemfile

group :test do
  gem "simplecov"
end

source "https://rubygems.pkg.github.com/chiefpansancolt" 
  group :test do
    gem "simplecov-material"
  end
end
```

---
title: "Ruby Testing with a Formatter that is Modernized"
date:  2020-10-11T00:00:00.000Z
description: Testing is the pinnacle of development, when you develop in a MVC model the controllers expect unit tests to prove it works as expected. Many of these libraries for Ruby are of the likes of Minitest, RSpec and many more.
img: https://res.cloudinary.com/practicaldev/image/fetch/s--NODAy0mX--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/kna6c1oduqy1ejd097vw.png
img_alt: Simplecov Tailwind Preview
layout: post
collection: posts
categories:
  - ruby
  - simplecov
  - tailwindcss
  - tailwindui
read_time: 4
user: Christopher Pezza
user_img: https://res.cloudinary.com/practicaldev/image/fetch/s--hcQRzY46--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/198458/c25b23cb-d6e9-49b3-84a0-904a2545f044.jpeg
user_url: https://chris-pezza.com
---

Testing is the pinnacle of development, when you develop in an MVC model the controllers expect unit tests to prove it works as expected. Many of these libraries for Ruby are of the likes of [Minitest](https://github.com/seattlerb/minitest), [RSpec](https://github.com/rspec/rspec), and many more.

With Ruby, a common library used to see what the output code coverage is, is [Simplecov](https://github.com/colszowka/simplecov). This tool is one I love, shows you what lines are covered, what was missed, and what you have defined as skipped. You also have the ability to configured many other settings. One of those settings is the formatter. You can describe one or many, out of the box comes an HTML Formatter that produces a webpage found in the coverage/index.html. With the new support of branches in ruby testing, this adds more columns to the table and to the file view that becomes hard to see/read. This has been a format I have lived by for years but as I have used it on large projects with large file sets and long file names, it has not been the cleanest UX to work with. I have found it to be outdated and needs to be upgraded.

With that, I decided to go to the drawing board to design and build a new UX for an HTML web output that leveraged the new standards. Previously I built one with the guidelines of [Material Design](https://material.io/), but have come to love the likes of [Tailwindcss](https://tailwindcss.com/), so I utilized [Tailwindcss](https://tailwindcss.com/) and [TailwindUI](https://tailwindui.com/). I analyzed what worked and what didn't with the HTML Formatter offered and concluded the following.

### The Goods
- Ability to search files in a group.
- Ability to see groups.

### The Bads
- When groups get over 6 in total it starts to cause the page to look weird. Especially when your screen size is not large.
- When the file name gets long and the screen is small rows fall off of the table view and become unreadable.
- Difficult to read coverage per file and per group.
- Scrolling on a file view could scroll past the file if your cursor was in the wrong spot.
- When viewing an individual file source you really didn't know what file you clicked on or what the details were about that file without closing the modal to view the table.

I knew that I had to maintain a singular page generation to ensure not too many dependency files were needed when generating. This led me to move away from a tabular approach and more for a left navigation approach. This new standardized view enables a user to see all available views without the page getting distorted when a large number of group views are generated. This would allow for scrollable user interaction. I also looked to move the sentence about the numbers, which was too much and hard to read. So I looked to change that to a tile grid at the top of each group page. There were little changes that will be noticed throughout the page such as, the footer is cleaner, the name of the project is displayed with dashes, and underscores stripped out. From a repo structure, I looked to implement and use Webpack to generate the output application JS and CSS files for usage.

In this new view, I also added the ability to search for files and filter down a list using a search bar. This was accomplished with some very basic JS that looks in the actively viewed table and uses a single search bar. I found that the old search box was not the easiest to see but is one of the most powerful tools so it should be recognized and emphasized to the user in the view. This is a big tool when large projects have hundreds of files to view that can be hard to find when scrolling to the naked eye.

The results are as follows with a before ([simplecov-html](https://github.com/colszowka/simplecov-html)) and after ([simplecov-tailwindcss](https://github.com/chiefpansancolt/simplecov-taiwindcss)).

### Before (simplecov-html)

#### Full View

![Full View HTML](https://thepracticaldev.s3.amazonaws.com/i/0vj2dzy2k6khtmtpfb26.png)

#### Individual File View

![Individual View HTML](https://thepracticaldev.s3.amazonaws.com/i/qjxsb759t8tmlf5yb9x1.png)

### After (simplecov-tailwindcss)

#### Full View

![Full View Tailwind](https://dev-to-uploads.s3.amazonaws.com/i/yxz3d70s4s469vpjyvfy.png)

#### Individual View

![Individual View Tailwind](https://dev-to-uploads.s3.amazonaws.com/i/zzjw6qgyacbo4zercol1.png)

As seen above the look is drastically different in styles, but still maintains the same data, and functionality prior and some. I hope to expand the functionality based on community feedback over time so please if you have any feedback checkout the repo [here](https://github.com/chiefpansancolt/simplecov-tailwindcss) and leave your comments under the following:

- [**Bug**](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues/new?assignees=chiefpansancolt&labels=bug%2C+new&template=bug_report.md&title=)
- [**Feature Request**](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues/new?assignees=chiefpansancolt&labels=enhancement%2C+new&template=feature-request.md&title=Feature+Request)
- [**Question**](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues/new?assignees=&labels=new%2C+question&template=question.md&title=Question)

Thank you for taking the time to read this on the approach I took to develop [Simplecov Tailwind](https://github.com/chiefpansancolt/simplecov-tailwindcss) Formatter and hope you love it as much as I do! It's just so clean and easy to use!!

To use this gem simply install the gem in your repo by adding to your gemfile. This gem is hosted on [rubygems.org](https://rubygems.org/gems/simplecov-tailwindcss) and on the new [Github Registry](https://github.com/chiefpansancolt/simplecov-tailwindcss/packages)

To add to your gemfile see below or check out the [Documentation](https://chiefpansancolt.live/docs/simplecov_tailwindcss) on the repo for reference

#### Ruby Gems Host

```ruby
# ./Gemfile

group :test do
  gem "simplecov"
  gem "simplecov-tailwindcss"
end
```

#### Github Rubygems Host

```ruby
# ./Gemfile

group :test do
  gem "simplecov"
end

source "https://rubygems.pkg.github.com/chiefpansancolt" 
  group :test do
    gem "simplecov-tailwindcss"
  end
end
```
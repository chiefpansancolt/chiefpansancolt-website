---
permalink: /docs/simplecov_tailwindcss/
layout: docs
title: Simplecov Tailwind
tags:
  - ruby
  - simplecov
  - tailwindcss
  - installation
  - simplecov tailwindcss
  - ruby gem
category: Documentation
---

<div data-target="tabular.overview" markdown="1">
<div class="flex items-center" markdown="1" style="margin-bottom: -10px; margin-top: -20px;">
  <div class="flex pl-2">
    <img src="https://github.com/chiefpansancolt/simplecov-tailwindcss/workflows/Builds/badge.svg" />
  </div>
  <div class="flex pl-2">
    <img src="https://github.com/chiefpansancolt/simplecov-tailwindcss/workflows/Linter/badge.svg" />
  </div>
  <div class="flex pl-2">
    <img src="https://github.com/chiefpansancolt/simplecov-tailwindcss/workflows/Tests/badge.svg" />
  </div>
  <div class="flex pl-2">
    <img src="https://img.shields.io/github/release/chiefpansancolt/simplecov-tailwindcss?logo=github&style=flat-square" />
  </div>
  <div class="flex pl-2">
    <img src="https://img.shields.io/gem/dt/simplecov-tailwindcss?logo=rubygems&style=flat-square" />
  </div>
</div>

> Note: To learn more about SimpleCov, check out the main repo at https://github.com/colszowka/simplecov

Generates a HTML Tailwind Design report generated from Simplecov using ruby 2.3 or greater.

## Changelog

### Version [1.0.0](https://github.com/chiefpansancolt/simplecov-tailwindcss/releases/tag/1.0.0)

Initial Release

#### Features Available

- Tabular view for Groupings
- File name searches
- Modal view of File Coverage from Click of Row
- Tile views for Stats in a group
- Clean Title of project
- Branch support


</div>

<div data-target="tabular.installation" markdown="1">
Add the below to your Gemfile to make Simplecov Tailwind available as a formatter for your application

### Ruby Gems Host

```ruby
# ./Gemfile

group :test do
  gem "simplecov"
  gem "simplecov-tailwindcss"
end
```

### Github Rubygems Host

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

</div>

<div data-target="tabular.usage" markdown="1">
To use Simplecov Tailwind you will need to ensure your Formatter is set to use Simplecov Tailwind.

In your helper ensure your line about formatter usage is one of the following.

Ensure to add the require tag at the top of your helper class where Simplecov is configured

```ruby
require "simplecov-tailwindcss"
```

**Single Formatter Usage:**

```ruby
SimpleCov.formatter = SimpleCov::Formatter::TailwindFormatter
```

**Multi Formatter Usage:**

```ruby
SimpleCov.formatters = SimpleCov::Formatter::MultiFormatter.new([
  SimpleCov::Formatter::HTMLFormatter,
  SimpleCov::Formatter::TailwindFormatter
])
```

</div>

<div data-target="tabular.contribution" markdown="1">
First and for most thank you for taking the time to look to contribute to
Simplecov Tailwind, any help is apprciated to make Simplecov Tailwind better
and stronger!

## Code of Conduct

This project and everyone participating in it is governed by the [Simplecov Tailwind Code of Conduct](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report
unacceptable behavior to [github@chiefpansancolt.live](mailto:github@chiefpansancolt.live).

## How can I Contribute

### Reporting Bugs

#### Before submitting a bug report

This section guides you through submitting a bug report for Simplecov Tailwind.
Following these guidelines helps maintainers and the community understand your
report 📝, reproduce the behavior 💻 💻, and find related reports 🔎.

Before creating bug reports, please check [this list](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
as you might find out that you don't need to create one. When you are creating
a bug report, please include as many details as possible. Fill out the
[required template](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/master/.github/ISSUE_TEMPLATE/bug_report.md)
, the information it asks for helps us resolve issues faster.

> Note: If you find a Closed issue that seems like it is the same thing that you're experiencing, open a new issue and
include a link to the original issue in the body of your new one.

## Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for
Simplecov Tailwind, including completely new features and minor improvements to
existing functionality. Following these guidelines helps maintainers and the
community understand your suggestion 📝 and find related suggestions 🔎.

Before creating enhancement suggestions, please check [this list](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement)
as you might find out that you don't need to create one. When you are creating
an enhancement suggestion, please include as many details as possible. Fill in
the [template](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/master/.github/ISSUE_TEMPLATE/feature-request.md)
, including the steps that you imagine you would take if the feature you're
requesting existed.

## Code Contributions

Looking to contribute to Simplecov? You can look for any tickets tagged with **help-wanted**

- [Help wanted issues](https://github.com/chiefpansancolt/simplecov-tailwindcss/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22)
- issues which could use help form the community to help complete

## Pull Requests

The process described here has several goals:

- Maintain Simplecov Tailwind's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Simplecov Tailwind Interaction
- Enable a sustainable system for Simplecov Tailwind's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

- Follow all instructions in [the template](https://github.com/chiefpansancolt/simplecov-tailwindcss/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
- After you submit your pull request, verify that all status checks are passing
  <details>
    <summary>What if the status checks are failing?</summary>
    If a status check is failing, and you believe that the
    failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the
    failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false
    positive, then we will open an issue to track that problem with our status check suite.
  </details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask
you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of
issues or pull requests you're interested in. For example, you might be interested in opening an Issue or perhaps
opening a pull request. To help you find issues and pull requests, each label is listed with search links for finding
open items with that label in Simplecov Tailwind. We encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

#### Type of Issue and Issue State

| Label Name | Description |
| --- | --- |
| *enhancement* | Feature requests. |
| *bug* | Confirmed bugs or reports that are very likely to be bugs. |
| *question* | Questions more than bug reports or feature requests (e.g. how do I do X). |
| *feedback* | General feedback more than bug reports or feature requests. |
| *help-wanted* | The Simplecov Tailwind team would appreciate help from the community in resolving these issues. |
| *more-information-needed* | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| *needs-reproduction* | Likely bugs, but haven't been reliably reproduced. |
| *blocked* | Issues blocked on other issues. |
| *duplicate* | Issues which are duplicates of other issues, i.e. they have been reported before. |
| *wontfix* | The Simplecov Tailwind team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| *invalid* | Issues which aren't valid (e.g. user errors). |
| *new* | Tagged on Issues that are new and have not been reviewed. |
| *tech debt* | Items to clean up / refactor / restructure |

#### Pull Request Labels

| Label Name | Description |
| --- | --- |
| *work-in-progress* | Pull Requests which are still being worked on, more changes will follow. |
| *needs-review* | Pull Requests which need code review, and approval from maintainers. |
| *under-review* | Pull Requests being reviewed by maintainers. |
| *requires-changes* | Pull Requests which need to be updated based on review comments and then reviewed again. |
| *needs-testing* | Pull Requests which need manual testing. |

</div>
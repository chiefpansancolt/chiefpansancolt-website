---
permalink: /devise_materialize/
layout: docs
title: Devise Materialize
tags:
  - ruby
  - devise
  - materialize
  - installation
  - devise materialize
  - ruby gem
category: Documentation
---

<div data-target="tabular.overview" markdown="1">
<div class="flex items-center" markdown="1" style="margin-top: -20px; margin-bottom: -10px;">
  <div class="flex pl-2">
    <img src="https://github.com/chiefpansancolt/devise_materialize/workflows/Builds/badge.svg" />
  </div>
  <div class="flex pl-2">
    <img src="https://github.com/chiefpansancolt/devise_materialize/workflows/Linter/badge.svg" />
  </div>
  <div class="flex pl-2">
    <img src="https://github.com/chiefpansancolt/devise_materialize/workflows/Tests/badge.svg" />
  </div>
  <div class="flex pl-2">
    <img src="https://img.shields.io/github/release/chiefpansancolt/devise_materialize?logo=github&style=flat-square" />
  </div>
  <div class="flex pl-2">
    <img src="https://img.shields.io/gem/dt/devise_materialize?logo=rubygems&style=flat-square" />
  </div>
</div>
Devise Materialize gem is here to generate you devise view in a materialize styled format with or w/o simple_form. This gem is not intended to live forever in your gemfile. It must be in your gemfile to load the resources needed from the generator. Below in the installation section will detail out which gems to install for all to work.

## Change Log

### [1.2.1](https://github.com/chiefpansancolt/devise_materialize/releases/tag/1.2.1)

#### Bug Fixes

- Fix views for class attribute typo and class ording on link_to element (#7)

### [1.2.0](https://github.com/chiefpansancolt/devise_materialize/releases/tag/1.2.0)

#### Repository Updates

- Update CI testing from 2.3-2.6 Ruby versions
- Update repo items

#### Bug Fixes

- Update Rails support upto 7 (#4) - Thanks @cgibsonmm for the assist!

### [v1.1.1](https://github.com/chiefpansancolt/devise_materialize/releases/tag/v1.1.1)

#### Repository Updates

- Enable Circleci testing for 2.2, 2.3, 2.4, and 2.5

### [v1.1.0](https://github.com/chiefpansancolt/devise_materialize/releases/tag/v1.1.0)

#### Repository Updates

- Touch up Repo with various items (#2)

#### Bug Fixes

- Fix ERB markup (#1)

### [v1.0.0](https://github.com/chiefpansancolt/devise_materialize/releases/tag/v1.0.0)

#### Features Added

- Generate Materialize Views for Devise in multiple formats

  **Formats Supported:**
    - HAML
    - SLIM
    - ERB

  **Form Types Supported:**
    - form_for
    - simple_form_for
</div>

<div data-target="tabular.installation" markdown="1">
Add these lines to your application's Gemfile:

```ruby
# Required gems so you don't have to add files manually
gem "devise"
gem "materialize-sass"
gem "material_icons"

# Required if using HAML
gem "haml"

# Required if using Slim
gem "slim"

# Required if using Simple Form
gem "simple_form"

gem "devise_materialize", "~>1.2.0"
```

</div>

<div data-target="tabular.usage" markdown="1">
[devise](https://github.com/plataformatec/devise), [materialize-sass](https://github.com/mkhairi/materialize-sass) and [material_icons](https://github.com/Angelmmiguel/material_icons) are required in your gemfile to enable the views to generate without error and in the proper style.

| Command Line Flags      | Description                            | Defaults | Options                  |
| ----------------------- | -------------------------------------- | -------- | ------------------------ |
| NAMESPACE               | What is the model name used for devise | Devise   | Devise, Users, Admins, etc |
| -f / --form-engine      | Define a form Engine to use            | default  | default, simple_form     |
| -v / --view-engine      | Define a View Engine to use            | erb      | erb, haml, slim          |

### Basic Usage

```bash
> rails g devise_materialize:install
```

This will generate the basic views of devise based on defaults

### Parameters Defined

If you plan to use simple form using this gem [simple_form_materialize](https://github.com/chiefpansancolt/simple_form_materialize) to install a config file with all wrappers defined as used in this gem.

```bash
> rails g devise_materialize:install Users --form-engine simple_form --view-engine haml
```

This will generate the views in simple form usage and HAML syntax
</div>

<div data-target="tabular.contribution" markdown="1">
First and for most thank you for taking the time to look to contribute to
Devise Materialize, any help is apprciated to make Devise Materialize better
and stronger!

## Code of Conduct

This project and everyone participating in it is governed by the [Simplecov
Material Code of Conduct](https://github.com/chiefpansancolt/devise_materialize/blob/master/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report
unacceptable behavior to [github@chiefpansancolt.live](mailto:github@chiefpansancolt.live).

## How can I Contribute

### Reporting Bugs

#### Before submitting a bug report

This section guides you through submitting a bug report for Devise Materialize.
Following these guidelines helps maintainers and the community understand your
report 📝, reproduce the behavior 💻 💻, and find related reports 🔎.

Before creating bug reports, please check [this list](https://github.com/chiefpansancolt/devise_materialize/issues?q=is%3Aopen+is%3Aissue+label%3Abug)
as you might find out that you don't need to create one. When you are creating
a bug report, please include as many details as possible. Fill out the
[required template](https://github.com/chiefpansancolt/devise_materialize/blob/master/.github/ISSUE_TEMPLATE/bug_report.md)
, the information it asks for helps us resolve issues faster.

> Note: If you find a Closed issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

## Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for
Devise Materialize, including completely new features and minor improvements to
existing functionality. Following these guidelines helps maintainers and the
community understand your suggestion 📝 and find related suggestions 🔎.

Before creating enhancement suggestions, please check [this list](https://github.com/chiefpansancolt/devise_materialize/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement)
as you might find out that you don't need to create one. When you are creating
an enhancement suggestion, please include as many details as possible. Fill in
the [template](https://github.com/chiefpansancolt/devise_materialize/blob/master/.github/ISSUE_TEMPLATE/feature-request.md)
, including the steps that you imagine you would take if the feature you're
requesting existed.

## Code Contributions

Looking to contribute to Simplecov? You can look for any tickets tagged with **help-wanted**

- [Help wanted issues](https://github.com/chiefpansancolt/devise_materialize/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22) - issues which could use help form the community to help complete

## Pull Requests

The process described here has several goals:

- Maintain Devise Materialize's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible Devise Materialize Interaction
- Enable a sustainable system for Devise Materialize's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

- Follow all instructions in [the template](https://github.com/chiefpansancolt/devise_materialize/blob/master/.github/PULL_REQUEST_TEMPLATE.md)
- After you submit your pull request, verify that all status checks are passing
    <details>
        <summary>What if the status checks are failing?</summary>
        If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.
    </details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

[GitHub search](https://help.github.com/articles/searching-issues/) makes it easy to use labels for finding groups of issues or pull requests you're interested in. For example, you might be interested in opening an Issue or perhaps opening a pull request. To help you find issues and pull requests, each label is listed with search links for finding open items with that label in Devise Materialize. We  encourage you to read about [other search filters](https://help.github.com/articles/searching-issues/) which will help you write more focused queries.

#### Type of Issue and Issue State

| Label Name |  Description |
| --- | --- |
| *enhancement* | Feature requests. |
| *bug* | Confirmed bugs or reports that are very likely to be bugs. |
| *question* | Questions more than bug reports or feature requests (e.g. how do I do X). |
| *feedback* | General feedback more than bug reports or feature requests. |
| *help-wanted* | The Devise Materialize team would appreciate help from the community in resolving these issues. |
| *more-information-needed* | More information needs to be collected about these problems or feature requests (e.g. steps to reproduce). |
| *needs-reproduction* | Likely bugs, but haven't been reliably reproduced. |
| *blocked* | Issues blocked on other issues. |
| *duplicate* | Issues which are duplicates of other issues, i.e. they have been reported before. |
| *wontfix* | The Devise Materialize team has decided not to fix these issues for now, either because they're working as intended or for some other reason. |
| *invalid* | Issues which aren't valid (e.g. user errors). |
| *new* | Tagged on Issues that are new and have not been reviewed. |
| *tech debt* | Items to clean up / refactor / restructure |

#### Pull Request Labels

| Label Name | Description
| --- | --- |
| *work-in-progress* | Pull Requests which are still being worked on, more changes will follow. |
| *needs-review* | Pull Requests which need code review, and approval from maintainers. |
| *under-review* | Pull Requests being reviewed by maintainers. |
| *requires-changes* | Pull Requests which need to be updated based on review comments and then reviewed again. |
| *needs-testing* | Pull Requests which need manual testing. |

</div>
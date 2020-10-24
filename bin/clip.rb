# frozen_string_literal: true

# !/usr/bin/env ruby

require "thor"

class Clip < Thor::Group
  include Thor::Actions

  def self.source_root
    File.dirname(__FILE__)
  end

  def create # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
    say("What is the Title of the Clip?")
    name_entry = ask("Clip Name: ")

    say("\nWhat is the Clip Id?")
    clipId_entry = ask("Clip Id: ")

    say("\nWhat is the Clip Date?")
    date_entry = ask("Date: ")

    say("\nWhat Group is this apart of")
    collection_entry = ask("Collection: ", limited_to: ["youtube", "twitch", "medal"])

    say("\nGenerated:!")

    record_url = ""

    if collection_entry == "twitch"
      record_url = "#{clipId_entry}&parent=localhost&parent=chiefpansancolt.live"
    elsif collection_entry == "medal"
      record_url = "#{clipId_entry}?autoplay=0&muted=0&loop=0"
    else
      record_url = "#{clipId_entry}"
    end

    opts = { name: name_entry, record_id: record_url, date: date_entry, collection: collection_entry }
    template "templates/clip_template.tt", "./src/_clips/#{"#{name_entry.gsub(/\s+/, '_').downcase}"}.md",
             opts
  end
end

Clip.start

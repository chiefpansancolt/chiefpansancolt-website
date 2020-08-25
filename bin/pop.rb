#!/usr/bin/env ruby
require "thor"

class Pop < Thor::Group
    include Thor::Actions

    def self.source_root
        File.dirname(__FILE__)
    end

    def create
        say("What is the Name of the Pop!")
        name_entry = ask("Pop Name: ")

        say("\nWhat is the url to the Pop! Image")
        img_url = ask("URL: ", path: true)

        say("\nWhat number is the Pop!")
        number_entry = ask("Number: ")

        say("\nWhat Group is this apart of")
        group_entry = ask("Group", limited_to: ["Marvel", "Game of Thrones", "Harry Potter", "Star Wars", "Disney", "Fortnite", "Pokemon", "Jurrassic Park"])

        say("\nGenerated:!")

        opts = { name: name_entry, img: img_url, number: number_entry, group: group_entry }
        template "templates/pop_template.tt", "./src/_pops/#{name_entry.gsub(/\s+/, "-").downcase + "-" + number_entry}.md", opts
    end
end

Pop.start
import SearchInput from "@/components/SearchInput";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ArtistList from "./ArtistList";

const ArtistSearch = ({
  artistQuery,
  setArtistQuery,
  handleArtistSelect,
  selectedArtists,
  setValue,
}) => {
  const commandRef = useRef();
  const { artists, isLoading, error } = useSelector(state => state.app.spotify);

  const handleClickOutside = event => {
    if (commandRef.current && !commandRef.current.contains(event.target)) {
      setArtistQuery(""); // Close the command by clearing the query
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(artistQuery.toLowerCase()),
  );

  return (
    <div className="relative flex flex-col w-full gap-3">
      <Label className="flex text-white justify-between">
        Artist<span className="text-primary">*</span>
      </Label>
      <SearchInput
        className="h-10"
        placeholder="Search"
        onChange={e => setArtistQuery(e.target.value)}
        value={artistQuery}
        showSuggesstions={false}
      />
      {artistQuery && (
        <div ref={commandRef} className="absolute z-10 w-full mt-16">
          <Command>
            <CommandList className="py-3">
              {isLoading && (
                <div className="flex items-center justify-center">
                  <div className="border-4 rounded-full w-7 h-7 animate-spin border-t-primary border-primary/30" />
                </div>
              )}
              {error ? (
                <CommandEmpty>
                  <div className="text-center text-error">{error}</div>
                </CommandEmpty>
              ) : filteredArtists.length !== 0 ? (
                filteredArtists.map(artist => (
                  <CommandItem key={artist.id}>
                    <Checkbox
                      checked={selectedArtists.some(a => a.id === artist.id)}
                      className="mr-2"
                      onClick={() => handleArtistSelect(artist)}
                    />
                    <div className="flex gap-3">
                      <Avatar className="w-10 h-10 overflow-hidden rounded-full">
                        <AvatarImage src={artist.images?.[1]?.url} />
                        <AvatarFallback>{artist.name}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{artist.name}</h4>
                        <p>Followers ( {artist.followers.total} )</p>
                      </div>
                    </div>
                  </CommandItem>
                ))
              ) : (
                <CommandEmpty>
                  No record founds for{" "}
                  <span className="font-medium">{artistQuery}</span>
                </CommandEmpty>
              )}
            </CommandList>
          </Command>
        </div>
      )}
      <ArtistList
        artistQuery={artistQuery}
        artists={selectedArtists}
        setValue={setValue}
      />
    </div>
  );
};

export default ArtistSearch;

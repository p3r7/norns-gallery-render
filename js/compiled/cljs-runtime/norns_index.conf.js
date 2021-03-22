goog.provide('norns_index.conf');
norns_index.conf.io_features = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"grid_64","grid_64",-1814224330),null], null), null),new cljs.core.Keyword(null,"catch-all-value","catch-all-value",-240110343),new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),new cljs.core.Keyword(null,"is-required","is-required",-1785813727),true], null),new cljs.core.Keyword(null,"arc","arc",252411045),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arc","arc",252411045),null], null), null)], null),new cljs.core.Keyword(null,"crow","crow",-2094052464),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"crow","crow",-2094052464),null], null), null)], null),new cljs.core.Keyword(null,"midi","midi",1256960668),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null)], null);
norns_index.conf.ordered_filterable_io_features = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"arc","arc",252411045),new cljs.core.Keyword(null,"crow","crow",-2094052464),new cljs.core.Keyword(null,"midi","midi",1256960668)], null);
norns_index.conf.flattended_io_features = (function norns_index$conf$flattended_io_features(){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__42282){
var vec__42283 = p__42282;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42283,(0),null);
var f_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42283,(1),null);
var std_vs = new cljs.core.Keyword(null,"values","values",372645556).cljs$core$IFn$_invoke$arity$1(f_props);
var catch_all_v = new cljs.core.Keyword(null,"catch-all-value","catch-all-value",-240110343).cljs$core$IFn$_invoke$arity$1(f_props);
var unspecified_v = f;
var all_vs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(std_vs,unspecified_v);
var all_vs__$1 = (cljs.core.truth_(catch_all_v)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(all_vs,catch_all_v):all_vs);
return all_vs__$1;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([norns_index.conf.io_features], 0)));
});
norns_index.conf.script_list = cljs.core.PersistentHashMap.fromArrays(["sines","drum_room","mouse","orca","passerby","oooooo","sam","reels","molly_the_polly","uvf","drift","pedalboard","rudiments","yggrasil","gridstep","fretwork","hachi","takt","greyhole","timeparty","loom","euclydigons","lost_futures","awake","changes","timber_player","wrms","mlr","ortf","lissadron","cranes","barcode","flora","rpmate","step"],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"kbd","kbd",316156875),null,new cljs.core.Keyword(null,"mouse","mouse",478628972),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracker","tracker",533009341)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"arc","arc",252411045),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"kbd","kbd",316156875),null,new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),null,new cljs.core.Keyword(null,"crow","crow",-2094052464),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kbd","kbd",316156875),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sampler","sampler",2068889864)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-effect","audio-effect",1793594060)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null),new cljs.core.Keyword(null,"encouraged-features","encouraged-features",1943507673),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracker","tracker",533009341)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"kbd","kbd",316156875),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"kbd","kbd",316156875),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"grid_64","grid_64",-1814224330),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-effect","audio-effect",1793594060)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio-effect","audio-effect",1793594060)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_any","grid_any",1341013008),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cc","cc",301258124)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sample-player","sample-player",-2099372769)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"synth","synth",-862700847)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null),new cljs.core.Keyword(null,"encouraged-features","encouraged-features",1943507673),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"midi_in","midi_in",249977396),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"looper","looper",1284743936)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"midi_out","midi_out",-689948896),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"util","util",-492628278)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_in","audio_in",79654211),null,new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null], null), null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequencer","sequencer",-207399296)], null),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"audio_out","audio_out",-1916002459),null,new cljs.core.Keyword(null,"grid_128","grid_128",313354669),null], null), null),new cljs.core.Keyword(null,"required-features","required-features",-1798960645),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid","grid",402978600),null], null), null)], null)]);
norns_index.conf.script_categories = new cljs.core.PersistentArrayMap(null, 6, ["audio fx","audio fx","granulators","granulators","loopers + live samplers","loopers + live samplers","sequencers","sequencers","synths","synths","art","art"], null);
norns_index.conf.script_categories_order = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["audio fx","granulators","loopers + live samplers","sequencers","synths","art"], null);

//# sourceMappingURL=norns_index.conf.js.map

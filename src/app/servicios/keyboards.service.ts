
import { Injectable } from '@angular/core';

@Injectable()
export class keyboardsService {

  private keyboards: keyboard[] = [
    {
      name: "Korg MS20",
      bio: "The MS-20 was one of Korg's first major successful portable analog monosynths and even today it is still a great little machine! The MS-20 is the big brother to the MS-10. It is an analog two-oscillator monophonic lead and bass synth with hard wired and patchable connections. The hard-wiring can be overridden however, using patch-cords. This type of hard-wired but patchable design was similar to the ARP 2600 of the late seventies. Of course the 2600 was much bigger and better. But the MS-20 offered a lot of flexible control and great sounds at a more affordable price.",
      img: "assets/img/korgMs.png",
      release: "1978",
      brand: "Korg"
    },
    {
      name: "Minimoog D4",
      bio: "he Minimoog was designed in response to the use of synthesizers in rock/pop music. Large modular synthesizers were expensive, cumbersome, and delicate, and not ideal for live performance; the Minimoog was designed to include the most important parts of a modular synthesizer in a compact package, without the need for patch cords. It later surpassed this original purpose, however, and became a distinctive and popular instrument in its own right. It remains in demand today, over four decades after its introduction, for its intuitive design and powerful bass and lead sounds.",
      img: "assets/img/moogMinimoogd.png",
      release: "1970",
      brand: "Moog"
    },
    {
      name: "Dave Smith prophet 5",
      bio: "One of the first fully programmable polyphonic analog synths, the Prophet 5 is the most classic synthesizer of the eighties! It is capable of a delightful analog sound unique to Sequential's Prophet series in which the P5 was King! Five voice polyphony - two oscillators per voice and a white noise generator. The analog filters, envelope and LFO all sound great and are extremely flexible. The P5 had patch memory storage as well, which scanned and memorized every knob setting for storing and recalling your sounds - a desperately needed feature at the time!",
      img: "assets/img/prophet5.png",
      release: "1978",
      brand: "Dave Smith"
    },
    {
      name: "Nord Lead 2X",
      bio: "Its warm analog sound coupled with cutting-edge digital technology moved the Nord Lead into a “leading” position in the synthesizer community. Musicians from all over the world loved its simplicity, intuitive design, and its musicality and expression offered with the virtual analog concept. The Nord Lead 2 improved upon the original Nord Lead, including expanded polyphony. A decade later, the Nord Lead, and its descendant the Nord Lead 2, are still among the most popular synths ever built. Used worldwide on stage and in studios, the Nord Lead series has contributed to the signature sounds of some of the most popular musicians and producers known today ... and we want to keep it that way!",
      img: "assets/img/nordlead2x-models.png",
      release: "2005",
      brand: "Nord"
    },
    {
      name: "Nord Stage",
      bio: "Featuring the best of Clavia’s award-winning technologies, the Nord Stage hosts three different instrument sections - Organ, Piano and Synth - plus an extensive effects section. You can use two sounds of each Section simultaneously - that’s two Organ manuals, two Synths, and two Pianos. These can be combined in any split or layered configuration you need for your performance. The Stage’s user interface is designed from a basic concept: All vital functions are represented on the front panel - easy to access, and never further away than a press of a single button. After more than 20 years of experience in designing instruments to be used by professional musicians, we know how important it is to make the technology completely transparent for the user. With the Nord Stage you only need to focus on your performance, which means never having to struggle with the technology.",
      img: "assets/img/nordStage.png",
      release: "2005",
      brand: "Nord"
    },
    {
      name: "Dave Smith EvolverPoly",
      bio: "The Evolver marked Dave’s Smith’s triumphant return to hardware synths and still sets the standard for sheer sonic ferocity in a monosynth. It features a plethora of Dave’s best ideas packed into a monstrously powerful instrument with a sound like no other.",
      img: "assets/img/evolverPoly.png",
      release: "2002",
      brand: "Dave Smith"
    },
    {
      name: "Dave Smith Mopho",
      bio: "Mopho is a compact and affordable—but powerful—monophonic analog synthesizer. The voice architecture is similar to a single voice of the Prophet ’08, but with a couple of twists to distinguish it from its award-winning sibling. We’ve added two sub-octave generators—one per oscillator—for additional girth and crushing basses. It also has an audio input that lets you process external audio and mix Mopho’s own audio output back in pre-filter for feedback effects that can range from subtle distortion to extreme skronk. The Push It button is a manual trigger that lets you play a specific note or latch notes and sequences on. It can also step through a sequence to play short melodic lines without a keyboard. Of course, Mopho can also be used with a MIDI controller or external sequencer.",
      img: "assets/img/mopho.png",
      release: "2009",
      brand: "Dave Smith"
    },
    {
      name: "Dave Smith Mopho X4",
      bio: "Each of Mopho x4’s four voices is composed of two analog oscillators, two sub octave generators, selectable 2- or 4-pole famed Curtis low-pass filter, three 5-stage envelope generators, four LFOs, a re-latchable arpeggiator, and a 16 x 4 step sequencer. Its voice also comes packed with 20 modulation sources and almost 50 destinations! FM the filter to create metallic bell-like sounds and use the feedback path to add subtle or destructive harmonic content to your sound. Mopho x4’s 100% analog signal path is powerful, monstrous, and sonically dynamic!",
      img: "assets/img/mopho x4.png",
      release: "2012",
      brand: "Dave Smith"
    },
    {
      name: "CMI Fairlight",
      bio: "he Fairlight CMI (short for Computer Musical Instrument) is a digital synthesizer, sampler and digital audio workstation introduced in 1979 by the founders of Fairlight, Peter Vogel and Kim Ryrie, developed based on the commercial license of Qasar M8 dual-MC6800 microprocessor musical instrument originally developed by Tony Furse of Creative Strategies in Sydney, Australia. It was one of the earliest music workstations with an embedded digital sampling synthesizer. It rose to prominence in the early 1980s and competed in the market with the Synclavier from New England Digital.",
      img: "assets/img/fairlight.png",
      release: "1979",
      brand: "Fairlight"
    },
    {
      name: "Mellotron",
      bio: "The Mellotron is an electro-mechanical, polyphonic tape replay keyboard originally developed and built in Birmingham, England, in 1963. It evolved from a similar instrument, the Chamberlin, but could be mass-produced more effectively. The instrument works by pulling a section of magnetic tape across a head. Different portions of the tape can be played to access different sounds.",
      img: "assets/img/mellotron.png",
      release: "1963",
      brand: "Mellotronics"
    },
    {
      name: "Yamaha DX7",
      bio: "The Yamaha DX7 is an FM synthesis-based digital synthesizer and electronic keyboard manufactured by the Yamaha Corporation from 1983 to 1989. It was the first commercially successful digital synthesizer. The DX7 was the moderately priced model of the DX series keyboard synthesizers that included the larger and more elaborate DX1 and DX5; the feature-reduced DX9; and the smaller and not directly compatible DX100 (and its full sized keys version DX27), DX11, and DX21. Over 200,000 of the original DX7 were made, and it remains one of the best-selling synthesizers of all time. The DX7 was MIDI-compatible,which meant that it could be connected to other MIDI-compatible synth modules, drum machines, audio sequencers and computers.",
      img: "assets/img/yamahadx7.png",
      release: "1983",
      brand: "Yamaha"
    },
    {
      name: "Roland Jupiter 8",
      bio: "The Jupiter-8 was Roland's first truly professional analog synthesizer. The Jupiter-8 features 16 rich analog oscillators at 2 per voice, eight voice polyphony and easy programming! At eight voices you can get some pretty thick analog sounds. Easy and intuitive programming via front panel sliders, knobs and buttons for all your tweaking needs. The legacy of the Jupiter synthesizers is due to their unique voice architecture and design, creating sounds that were so unreal and amazing that they have to be heard! No other synths in the world can create analog sounds as cool and authentic as these.",
      img: "assets/img/rolandJup8.png",
      release: "1981",
      brand: "Roland"
    }
  ];


  constructor() {
    console.log("Servicio listo")
  }

  getkeyboards() {
    return this.keyboards;
  }

  getkeyboardsPos(searchTerm: string) {
    let position: number = 0;
    searchTerm = searchTerm.toLowerCase();
    for (let keyboard of this.keyboards) {
      let name = keyboard.name.toLowerCase();
      if (name.localeCompare(searchTerm)== 0) {
          return position;
      }
      position++;
    }
    return -1;
  }

  getKeyboard(idx: string) {
    return this.keyboards[idx];
  }

  buscarkeyboards(searchTerm: string): keyboard[] {
    let keyboardsArr: keyboard[] = [];
    searchTerm = searchTerm.toLowerCase();

    for (let keyboard of this.keyboards) {
      let name = keyboard.name.toLowerCase();

      if (name.lastIndexOf(searchTerm) >= 0) {
        keyboardsArr.push(keyboard);
      }
    }
    return keyboardsArr;
  }


}

export interface keyboard {
  name: string;
  bio: string;
  img: string;
  release: string;
  brand: string;
};

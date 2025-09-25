# VERSE 🎵

A **complete music production environment** by **Studio Poetics** - where technology meets poetic expression. Create professional beats, melodies, and full compositions directly in your browser with studio-quality effects, real-time recording, and live sampling capabilities.

**VERSE** transforms your browser into a powerful music sequencer with professional features previously only available in desktop DAWs.

![VERSE Interface](https://via.placeholder.com/1200x600/111111/00ff9d?text=VERSE+|+COMPLETE+MUSIC+PRODUCTION+SUITE)

## ✨ Features

### 🥁 **Drum Sequencer**
- **4 Drum Tracks**: Kick, Snare, Hi-hat, Crash
- **16-Step Patterns**: Classic drum machine workflow
- **Sample Loading**: Load your own drum samples (WAV, MP3, etc.)
- **Synthesized Drums**: Built-in generated drum sounds
- **Visual Feedback**: Real-time step highlighting during playback

### 🎹 **Multi-Track Synth**
- **Unlimited Synth Tracks**: Add/remove tracks dynamically
- **5 Instruments**: Bass, Lead, Pad, Pluck, Organ
- **Per-Step Note Assignment**: Create complex melodies and harmonies
- **Chromatic Note Range**: C2-B3 with sharps/flats
- **Sample Playback**: Load audio samples as synth instruments

### 🎛️ **Performance Knobs**
- **4 Assignable Knobs**: Real-time parameter control
- **Multiple Targets**: Control any drum or synth parameter
- **Visual Feedback**: Rotating needle indicators
- **Parameter Options**: 
  - Drum: Pitch, Decay, Noise Mix, Filter Cutoff
  - Synth: Filter, Attack, Release, Master Volume

### 🔊 **Professional Effects Chain**
- **Reverb**: Convolution reverb with room size control
- **Delay**: Feedback delay with time/feedback/wet controls
- **Distortion**: Waveshaping with drive and tone controls
- **Chorus**: Dual-delay chorus with rate and depth
- **Track Routing**: Independent effect sends for drums/synths
- **Real-time Control**: Instant parameter changes during playback

### 🎚️ **Advanced Audio Processing**
- **Web Audio API**: Professional-grade audio processing
- **Zero-latency**: Real-time parameter changes
- **High Quality**: 4x oversampling on distortion
- **Master Dynamics**: Built-in compressor/limiter
- **Sample Rate**: Native browser sample rate (44.1/48kHz)

### 🎧 **Audio Recording & Sampling**
- **Session Recording**: Capture complete performances as WAV files
- **Live Input Sampling**: Record from microphone in real-time
- **Professional Quality**: Full-resolution audio export and import
- **One-Click Recording**: Simple record/stop interface for both session and sampling
- **Automatic Download**: Files saved with timestamps
- **Master Chain Capture**: Records final processed output with all effects
- **Real-time Monitoring**: Visual level meters and gain control
- **Instant Assignment**: Assign recorded samples to any drum track immediately

### 🎨 **Modern Interface Design**
- **2-Column Layout**: Main sequencer on left, effects sidebar on right
- **No Scrolling Required**: All controls visible and accessible
- **Studio Poetics Aesthetic**: Professional dark theme with signature colors
- **Responsive Design**: Optimized for desktop music production workflows
- **Visual Feedback**: Real-time step highlighting, velocity colors, level meters
- **Professional Typography**: JetBrains Mono for technical precision

## 🚀 Getting Started

### **Quick Start - Complete Workflow**
1. **Launch**: Open `index.html` in a modern web browser
2. **Initialize Audio**: Click any button to activate Web Audio (browser requirement)
3. **Create Drum Patterns**: Click step buttons to build rhythms
4. **Add Synth Tracks**: Use "+" button to add melodic elements
5. **Program Melodies**: Click synth steps to assign notes (C2-B3 range)
6. **Load Custom Samples**: Use 📁 buttons to load your audio files
7. **Enable Live Input**: Click "🎤 ENABLE MIC" for real-time sampling
8. **Record Live Samples**: Use "⏺ SAMPLE" to capture audio, then assign to tracks
9. **Apply Effects**: Use sidebar effects and routing controls
10. **Adjust Velocity**: Right-click active steps for dynamics control
11. **Add Swing**: Use swing slider for groove timing
12. **Record Session**: Click "⏺ REC" to capture your complete performance
13. **Download Result**: Automatically saves as timestamped WAV file

### **System Requirements**
- **Modern Browser**: Chrome 66+, Firefox 60+, Safari 14+
- **Audio Support**: Web Audio API compatibility
- **File Support**: Any audio format supported by browser

## 🎵 Usage Guide

### **Creating Drum Patterns**
```
1. Click step buttons to activate/deactivate drum hits
2. Press ▶ (or spacebar) to start playback
3. Adjust BPM with the tempo control (60-200)
4. Load custom samples with 📁 buttons
5. Clear samples with 🗑️ buttons to return to synth drums
```

### **Programming Synth Melodies**
```
1. Click "+" to add a new synth track
2. Select instrument from dropdown (Bass, Lead, Pad, etc.)
3. Click any step button to open note selector
4. Choose notes or click CLEAR to remove
5. Load audio samples as instruments with 📁 button
```

### **Using Effects**
```
1. Click "SHOW" to reveal effects panel
2. Turn effects ON/OFF with bypass buttons
3. Adjust parameters with sliders
4. Route tracks to effects with routing buttons:
   - DRUMS: Route individual drum effects
   - SYNTHS: Route all synth tracks to effects
```

### **Performance Controls**
```
1. Assign knobs to parameters via dropdown menus
2. Turn knobs during playback for live control
3. Use keyboard shortcuts:
   - SPACEBAR: Play/Pause
   - ESCAPE: Stop
```

### **Recording Sessions**
```
1. Create your pattern and adjust effects
2. Click ⏺ REC to start recording
3. Play your sequence live with knob adjustments
4. Click ⏹ STOP to end recording
5. WAV file automatically downloads with timestamp
6. Recording captures all effects and dynamics processing
```

## 🎛️ Track Routing System

The sequencer uses a sophisticated routing matrix that allows precise control over which tracks receive which effects:

### **Audio Signal Flow**
```
Audio Source → Track Router → Effects Bus → Master Output
```

### **Routing Options**
- **DRUMS Bus**: Independent routing for all 4 drum tracks
- **SYNTHS Bus**: Shared routing for all synth tracks
- **Per-Effect Control**: Toggle each effect independently
- **Real-time Changes**: Modify routing during playback

### **Default Routing**
- **Drums**: Clean (no effects)
- **Synths**: Reverb + Chorus enabled

## 🎚️ Effects Reference

### **🔊 Reverb**
- **Room Size** (0-100%): Controls decay characteristics
- **Wet Level** (0-100%): Reverb/dry signal mix
- **Algorithm**: Real-time convolution reverb

### **⏱️ Delay**
- **Time** (0-1000ms): Delay time
- **Feedback** (0-90%): Number of repeats
- **Wet Level** (0-100%): Delay/dry signal mix

### **🎸 Distortion**
- **Drive** (0-100%): Distortion amount
- **Tone** (0.2-8kHz): High-frequency rolloff
- **Algorithm**: Waveshaping with 4x oversampling

### **🌊 Chorus**
- **Rate** (0.1-10Hz): LFO modulation speed
- **Depth** (0-100%): Modulation intensity
- **Algorithm**: Dual-delay with sine wave modulation

## 🎹 Performance Knob Targets

### **Drum Parameters**
- **KICK PITCH**: Fundamental frequency (0.5x - 2x)
- **KICK DECAY**: Sustain length (0.3x - 1.7x)
- **SNARE PITCH**: Tone frequency (0.5x - 2.5x)
- **SNARE NOISE**: Noise/tone balance (0.2x - 1.8x)
- **HIHAT FILTER**: Frequency cutoff (0.2x - 1.8x)
- **CRASH DECAY**: Ring time (0.3x - 1.7x)

### **Synth Parameters**
- **SYNTH FILTER**: Real-time cutoff (200Hz - 8kHz)
- **SYNTH ATTACK**: Envelope attack time (0.001s - 0.5s)
- **SYNTH RELEASE**: Envelope release time (0.1s - 2s)

### **Global Parameters**
- **MASTER VOL**: Overall output level (0-100%)
- **SWING**: Timing groove control (50-75%)

### **Velocity Sensitivity**
- **Visual Indicators**: Steps show velocity levels through color coding
- **Ghost Notes**: Subtle hits at low velocity (gray)
- **Soft**: Medium velocity hits (green tinted)
- **Normal**: Standard velocity (bright green)  
- **Hard**: Accent hits (orange with glow)
- **Right-Click**: Access velocity editor for any active step

## 📁 Sample Loading

### **Supported Formats**
- **Audio Files**: WAV, MP3, OGG, M4A, FLAC
- **Quality**: Any sample rate, mono/stereo
- **Length**: No practical limit (browser memory dependent)

### **Loading Process**
1. Click 📁 button on any track
2. Select audio file from computer
3. Sample loads and replaces original sound
4. For synth samples: automatic pitch shifting based on notes
5. Click 🗑️ to restore original synthesized sound

### **Sample Behavior**
- **Drums**: Samples play at original pitch
- **Synths**: Samples pitch-shift based on selected notes (C3 = original pitch)

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **SPACEBAR** | Play/Pause |
| **ESCAPE** | Stop |
| **RIGHT-CLICK** | Velocity Editor (active steps) |

## 🎨 Studio Poetics Aesthetic

The interface embodies the Studio Poetics design philosophy:
- **Color Palette**: Dark themes with signature green (#00ff9d) and orange (#ff6b35) accents
- **Typography**: JetBrains Mono monospace font
- **Visual Elements**: Gradient buttons, glowing effects, hardware-inspired controls
- **Layout**: Clean, minimal interface with intuitive groupings
- **Feedback**: Real-time visual indicators and smooth animations

## 🛠️ Technical Details

### **Architecture**
- **Frontend**: Vanilla HTML5, CSS3, JavaScript ES6+
- **Audio Engine**: Web Audio API with AudioContext
- **Real-time Processing**: High-precision audio scheduling
- **Effects**: Custom Web Audio API implementations
- **File Format**: WAV, MP3, OGG, M4A, FLAC support
- **Recording**: MediaRecorder API with MediaStream processing
- **Microphone**: getUserMedia API for real-time input

### **Performance**
- **Latency**: Near-zero latency audio processing
- **CPU Usage**: Optimized for real-time performance  
- **Memory**: Efficient sample management and cleanup
- **Browser Compatibility**: Chrome 66+, Firefox 60+, Safari 14+
- **Audio Quality**: Native browser sample rate (44.1/48kHz)

### **Code Architecture**
- **Main Class**: `VerseSequencer` - Core sequencer engine
- **Modular Design**: Separate systems for drums, synths, effects, recording
- **Event-Driven**: DOM event listeners with async audio context handling
- **Error Handling**: Graceful fallbacks for audio context and browser compatibility

### **File Structure**
```
sequencer/
├── index.html          # Main HTML interface with 2-column layout
├── style.css           # Complete styling and Studio Poetics aesthetic
├── sequencer.js        # Core sequencer engine and logic
└── README.md          # Complete documentation and usage guide
```

### **Developer Guide**

**Key Classes and Methods:**
- `VerseSequencer`: Main sequencer class with all functionality
- `initAudioContext()`: Initialize Web Audio API with browser compatibility
- `toggleStep()`: Handle step programming for drums and synths
- `playCurrentStep()`: Execute audio playback for current step
- `setupEffectsChain()`: Configure audio effects routing
- `startRecording()`: Begin session recording with MediaRecorder

**Extending VERSE:**
- Add new drum sounds by modifying `createDrumSound()` method
- Implement new synth waveforms in `createSynthTone()` 
- Create additional effects by extending the `effects` object
- Customize UI by modifying CSS variables in `:root` selector

## 🎵 Creative Tips

### **Genre Styles**

**House/Techno:**
```
- 4/4 kick pattern on every step
- Hi-hats on off-beats (steps 2, 4, 6, 8...)
- Reverb on synths, delay on drums
- Use bass synth for low-end, lead for melodies
```

**Hip-Hop/Trap:**
```
- Kick on 1 and 3, snare on 2 and 4
- Complex hi-hat patterns with 16th notes
- Heavy distortion on drums
- Use pluck synth for melodic elements
```

**Ambient/Chill:**
```
- Sparse drum patterns with reverb
- Long pad sounds with chorus and reverb
- Slower BPMs (80-100)
- Use organ synth for warm textures
```

## 🐛 Troubleshooting

### **Audio Not Playing**
- **Solution**: Click any button first (browser autoplay policy)
- **Check**: Browser audio permissions
- **Verify**: Volume levels and system audio

### **Samples Not Loading**
- **Check**: File format compatibility
- **Verify**: File size (large files may take time)
- **Try**: Different audio file or refresh page

### **Performance Issues**
- **Reduce**: Number of active effects
- **Check**: Browser tab isn't backgrounded
- **Close**: Other audio applications

### **Effects Not Working**
- **Verify**: Effects are enabled (green ON button)
- **Check**: Track routing is active (orange routing buttons)
- **Adjust**: Effect parameters to hear changes

## 🎯 Future Features

Planned enhancements for future versions:
- **Pattern Chaining**: Link multiple 16-step patterns
- **Song Mode**: Full arrangement capabilities  
- **MIDI Support**: External controller integration
- **More Effects**: Filters, EQ, additional processing
- **Project Save/Load**: Session management
- **Pattern Banks**: Multiple pattern storage and switching
- **Automation**: Parameter automation recording and playback

## 📄 License

This project is open source and available under the MIT License.

## 🎵 Credits

Created by **Studio Poetics** - where technology meets artistic expression. Inspired by the legendary workflow of classic drum machines, synthesizers, and the poetic nature of musical composition.

Built with ❤️ using Web Audio API and modern web technologies.

---

**Ready to compose your verse? Load up VERSE and start creating!** 🎵✨
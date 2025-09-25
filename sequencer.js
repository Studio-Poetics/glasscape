/*
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║                                                                                                              ║
 * ║      ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗     ██████╗  ██████╗ ███████╗████████╗██╗ ██████╗███████╗ ║
 * ║      ███╔══████╚══██╔═████╗ ██║██╔══████║██╔═══████╗   ██╔══██╗██╔═══█████╔════████╚══██╔═████║██╔════████╔════╝ ║
 * ║      █████████║   ████║███████║██║  █████║██║   ████║   ██████╔╝██║   █████████╗   ████║   ████║██║     ███████╗   ║
 * ║      ███╔══█████║   ████║██╔████║██║  █████║██║   ████║   ██╔═══╝ ██║   █████╔══╝   ████║   ████║██║     ╚════████║  ║
 * ║      ███║  █████║   ████║██║ ████║██████╔████║██████╔╝   ████║     ██████╔════████████████║   ████║███████╗███████║   ║
 * ║      ╚═╝  ═╝╚╝   ╚═╝╚═╝  ╚═══╝╚═════╝ ╚═╝╚═════╝    ╚═══╝     ╚═════╝ ╚══════╝╚═══════╝   ╚═╝╚═══════╝╚══════╝   ║
 * ║                                                                                                              ║
 * ║  ██╗   ██╗███████╗██████╗ ███████╗███████╗    ███████╗███████╗ ██████╗ ██╗   ██╗███████╗███╗   ██╗ ██████╗███████╗██████╗  ║
 * ║  ██║   ██████╔════████╔══██████╔════████╔════╝    ███╔════████╔════╝██╔═══████║   ██████╔════████████╗  █████╔════████╔════████╔══██╗ ║
 * ║  ██║   █████████╗  ████████╔██████████████████╗       ███████╗█████╗  ██║   ██║██║   ██████████████╔██╗ █████║     █████████████████╔╝ ║
 * ║  ╚██╗ ██╔════██╔══╝  ████╔══██████╔══╝  ╚════████║      ╚════████╔══╝  ████████████║   ██████╔══████║╚████████║     ███╔══████████╔══██╗ ║
 * ║   ╚████╔╝ ██████████║ ██║   █████████████████████║      ███████████████████████████║   ██████████████║ ╚████████████████████████████╔╝  ║
 * ║    ╚═══╝  ╚══════╚══╝ ╚═╝   ╚═════════════╚══════╝      ╚══════╚══════════════╚══════╝   ╚═════════╚═══╝  ╚═══╚══════╚══════╚═══════╝   ║
 * ║                                                                                                              ║
 * ║                               >> VERSE | Professional Web-Based Music Sequencer <<                         ║
 * ║                                      >> Where Technology Meets Poetic Expression <<                         ║
 * ║                                                                                                              ║
 * ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║
 * ║  ░ CRAFTED WITH PRECISION • BUILT FOR CREATORS • POWERED BY WEB AUDIO API • DESIGNED FOR EXPRESSION ░      ║
 * ║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ║
 * ║                                                                                                              ║
 * ║  Features: 16-Step Sequencing • Multi-Track Synthesis • Velocity Sensitivity • Professional Effects        ║
 * ║           Real-time Recording • Microphone Sampling • Swing/Groove • Master Dynamics • 2-Column Layout      ║
 * ║                                                                                                              ║
 * ║  Stack: Vanilla JavaScript ES6+ • Web Audio API • HTML5 • CSS3 Grid • MediaRecorder API                    ║
 * ║                                                                                                              ║
 * ║  Author: Studio Poetics | Version: 1.0.0 | License: MIT | Year: 2025                                       ║
 * ║                                                                                                              ║
 * ║                          "Every beat tells a story, every note writes a verse..."                           ║
 * ║                                                                                                              ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

class VerseSequencer {
    constructor() {
        // Core audio system
        this.audioContext = null;                    // Web Audio API context for all audio processing
        
        // Playback control
        this.isPlaying = false;                      // Current playback state
        this.currentStep = 0;                        // Current step in 16-step sequence (0-15)
        this.bpm = 120;                             // Beats per minute for tempo
        this.swing = 50;                            // Swing percentage (50% = straight, 75% = max swing)
        this.stepInterval = null;                    // Timer for step scheduling
        // Drum track configuration - 4 tracks with 16 steps each
        this.tracks = [
            { name: 'KICK', steps: new Array(16).fill(false), velocities: new Array(16).fill(0.8), buffer: null },    // Kick drum track
            { name: 'SNARE', steps: new Array(16).fill(false), velocities: new Array(16).fill(0.8), buffer: null },   // Snare drum track
            { name: 'HIHAT', steps: new Array(16).fill(false), velocities: new Array(16).fill(0.8), buffer: null },   // Hi-hat track
            { name: 'CRASH', steps: new Array(16).fill(false), velocities: new Array(16).fill(0.8), buffer: null }    // Crash cymbal track
        ];
        
        // Synthesizer system
        this.synthTracks = [];                       // Dynamic array of synthesizer tracks
        this.currentModalTrackId = null;             // Currently selected track for note editing
        this.currentModalStepIndex = null;           // Currently selected step for note editing
        
        // Synthesizer presets with ADSR envelope parameters
        this.synthPresets = {
            bass: { waveform: 'sawtooth', attack: 0.01, decay: 0.3, sustain: 0.3, release: 0.5 },    // Deep bass sounds
            lead: { waveform: 'square', attack: 0.05, decay: 0.2, sustain: 0.5, release: 0.3 },     // Sharp lead melodies  
            pad: { waveform: 'sine', attack: 0.8, decay: 0.5, sustain: 0.7, release: 2.0 },         // Ambient pad sounds
            pluck: { waveform: 'triangle', attack: 0.001, decay: 0.1, sustain: 0.1, release: 0.2 }, // Plucked string sounds
            organ: { waveform: 'sine', attack: 0.1, decay: 0.1, sustain: 0.8, release: 0.4 }        // Organ-like sustained tones
        };
        
        // Musical note to frequency mapping (Hz) - 2 octave range
        this.noteFrequencies = {
            'C2': 65.41, 'C#2': 69.30, 'D2': 73.42, 'D#2': 77.78, 'E2': 82.41, 'F2': 87.31, 'F#2': 92.50, 'G2': 98.00, 'G#2': 103.83, 'A2': 110.00, 'A#2': 116.54, 'B2': 123.47,
            'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61, 'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'B3': 246.94
        };
        
        // Performance knob control mappings - 4 assignable knobs for real-time control
        this.knobMappings = {
            1: { target: 'none', value: 50 },
            2: { target: 'none', value: 50 },
            3: { target: 'none', value: 50 },
            4: { target: 'none', value: 50 }
        };
        
        this.masterGain = null;
        
        this.drumParams = {
            kick: { basePitch: 60, pitchMod: 1, decayMod: 1 },
            snare: { basePitch: 200, pitchMod: 1, noiseMod: 1 },
            hihat: { baseCutoff: 8000, cutoffMod: 1 },
            crash: { baseDecay: 5, decayMod: 1 }
        };
        
        this.currentLoadingTrack = null;
        
        // Effects chain configuration and states
        // Each effect has enabled state, parameters, and Web Audio API nodes
        this.effects = {
            reverb: {
                enabled: true,                  // Effect bypass state
                roomSize: 0.2,                  // Reverb decay characteristics (0-1)
                wetLevel: 0.3,                  // Wet/dry mix level (0-1)
                convolver: null,                // ConvolverNode for reverb processing
                wetGain: null,                  // Gain node for wet signal
                dryGain: null                   // Gain node for dry signal
            },
            delay: {
                enabled: false,                 // Effect bypass state
                time: 250,                      // Delay time in milliseconds
                feedback: 0.4,                  // Feedback amount (0-0.9)
                wetLevel: 0.25,                 // Wet/dry mix level (0-1)
                delayNode: null,                // DelayNode for time-based effect
                feedbackGain: null,             // Gain node for feedback loop
                wetGain: null,                  // Gain node for wet signal
                dryGain: null                   // Gain node for dry signal
            },
            distortion: {
                enabled: false,                 // Effect bypass state
                drive: 0.2,                     // Distortion drive amount (0-1)
                tone: 2000,                     // Tone control frequency (Hz)
                waveshaper: null,               // WaveShaperNode for distortion
                filter: null                    // BiquadFilterNode for tone control
            },
            chorus: {
                enabled: false,                 // Effect bypass state
                rate: 1.5,                      // LFO rate in Hz
                depth: 0.5,                     // Modulation depth (0-1)
                lfo: null,                      // OscillatorNode for modulation
                delay1: null,                   // First DelayNode
                delay2: null,                   // Second DelayNode for stereo effect
                wetGain: null,                  // Gain node for wet signal
                dryGain: null                   // Gain node for dry signal
            },
            compressor: {
                enabled: true,                  // Master compressor always enabled
                threshold: -12,                 // Compression threshold in dB
                ratio: 4,                       // Compression ratio
                attack: 0.003,                  // Attack time in seconds
                release: 0.25,                  // Release time in seconds
                compressor: null                // DynamicsCompressorNode
            }
        };
        
        // Effects routing matrix - controls which track groups receive which effects
        this.effectsRouting = {
            drums: { reverb: false, delay: false, distortion: false, chorus: false },    // Drums default: clean
            synths: { reverb: true, delay: false, distortion: false, chorus: true }     // Synths default: reverb + chorus
        };
        
        // Separate audio chains for different track groups
        this.drumEffectsChain = null;           // Audio processing chain for all drum tracks
        this.synthEffectsChain = null;          // Audio processing chain for all synth tracks
        
        // Session recording system - captures final mixed output
        this.isRecording = false;               // Recording state flag
        this.mediaRecorder = null;              // MediaRecorder instance for session capture
        this.recordedChunks = [];               // Audio data chunks during recording
        this.recordingStartTime = null;         // Timestamp for recording start
        
        // Real-time microphone input and sampling system
        this.micEnabled = false;                // Microphone access state
        this.micStream = null;                  // MediaStream from getUserMedia
        this.micSource = null;                  // MediaStreamAudioSourceNode
        this.micGain = null;                    // Gain control for microphone input
        this.analyser = null;                   // AnalyserNode for level monitoring
        this.inputLevel = new Float32Array(1); // Buffer for input level analysis
        this.currentSample = null;              // Currently recorded sample data
        this.sampleRecording = false;           // Sample recording state flag
        this.sampleRecorder = null;             // MediaRecorder for sample capture
        this.sampleChunks = [];                 // Sample audio data chunks
        
        // Initialize the sequencer
        this.init();
    }
    
    /**
     * Initialize the sequencer
     * Sets up event listeners, creates initial synth track
     * AudioContext initialization is deferred until first user interaction
     */
    async init() {
        this.setupEventListeners();
        this.addSynthTrack();
        // AudioContext will be initialized on first user interaction
    }
    
    /**
     * Initialize Web Audio API context and audio processing chain
     * Creates master gain, effects chain, and loads default samples
     * Handles browser autoplay policy by resuming suspended context
     */
    async initAudioContext() {
        if (this.audioContext) return; // Already initialized
        
        try {
            // Create Web Audio API context with cross-browser compatibility
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            console.log('AudioContext created');
            
            // Resume AudioContext if it's suspended due to autoplay policy
            if (this.audioContext.state === 'suspended') {
                await this.audioContext.resume();
                console.log('AudioContext resumed');
            }
            
            // Create master output gain control
            this.masterGain = this.audioContext.createGain();
            this.masterGain.gain.setValueAtTime(0.8, this.audioContext.currentTime);
            
            // Initialize effects processing chain
            await this.initializeEffects();
            this.connectEffectsChain();
            
            // Load default samples after AudioContext is ready
            this.loadDefaultSamples();
            
        } catch (error) {
            console.error('Audio context initialization failed:', error);
        }
    }
    
    /**
     * Set up all DOM event listeners for the sequencer interface
     * Handles playback controls, BPM changes, and initializes audio context
     */
    setupEventListeners() {
        // Main transport controls
        const playBtn = document.getElementById('play-btn');
        const stopBtn = document.getElementById('stop-btn');
        const bpmInput = document.getElementById('bpm');
        
        playBtn.addEventListener('click', () => this.togglePlayback());
        stopBtn.addEventListener('click', () => this.stop());
        bpmInput.addEventListener('input', (e) => this.setBPM(parseInt(e.target.value)));
        
        const recordBtn = document.getElementById('record-btn');
        recordBtn.addEventListener('click', () => this.toggleRecording());
        
        const swingInput = document.getElementById('swing');
        const swingValue = document.getElementById('swing-value');
        swingInput.addEventListener('input', (e) => {
            this.swing = parseInt(e.target.value);
            swingValue.textContent = `${this.swing}%`;
        });
        
        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                if (!this.audioContext) {
                    await this.initAudioContext();
                }
                this.toggleStep(e);
            });
            
            btn.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.toggleStep(e);
            });
        });
        
        document.getElementById('add-synth-track').addEventListener('click', () => {
            this.addSynthTrack();
        });
        
        document.getElementById('remove-synth-track').addEventListener('click', () => {
            this.removeSynthTrack();
        });
        
        this.setupModalEventListeners();
        this.setupSampleLoadingEventListeners();
        this.setupEffectsEventListeners();
        
        for (let i = 1; i <= 4; i++) {
            document.getElementById(`knob${i}`).addEventListener('input', async (e) => {
                if (!this.audioContext) {
                    await this.initAudioContext();
                }
                this.updateKnobValue(i, parseInt(e.target.value));
            });
            
            document.getElementById(`knob${i}-target`).addEventListener('change', (e) => {
                this.updateKnobTarget(i, e.target.value);
            });
        }
        
        document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    }
    
    /**
     * Handle step button clicks for both drum and synth tracks
     * Left click: toggle step on/off, Right click: open velocity editor
     * Synth steps: open note selection modal
     */
    toggleStep(event) {
        const btn = event.target;
        
        // Handle synth step clicks - open note selection modal
        if (btn.classList.contains('synth-step')) {
            const trackId = btn.dataset.trackId;
            const stepIndex = parseInt(btn.dataset.step);
            this.openNoteModal(trackId, stepIndex);
            return;
        }
        
        // Handle drum step clicks
        const stepRow = btn.closest('.step-row');
        const trackIndex = parseInt(stepRow.dataset.track);
        const stepIndex = parseInt(btn.dataset.step);
        
        // Right click or Ctrl+click: open velocity editor for active steps
        if (event.button === 2 || event.ctrlKey) {
            if (this.tracks[trackIndex].steps[stepIndex]) {
                this.openVelocityModal(trackIndex, stepIndex);
            }
            return;
        }
        
        // Left click: toggle step on/off
        this.tracks[trackIndex].steps[stepIndex] = !this.tracks[trackIndex].steps[stepIndex];
        this.updateStepVisual(trackIndex, stepIndex);
    }
    
    /**
     * Update visual appearance of step button based on state and velocity
     * Shows different colors for velocity levels: ghost, soft, normal, hard
     */
    updateStepVisual(trackIndex, stepIndex) {
        const stepBtn = document.querySelector(`.step-row[data-track="${trackIndex}"] .step-btn[data-step="${stepIndex}"]`);
        const isActive = this.tracks[trackIndex].steps[stepIndex];
        const velocity = this.tracks[trackIndex].velocities[stepIndex];
        
        stepBtn.classList.toggle('active', isActive);
        
        stepBtn.classList.remove('velocity-ghost', 'velocity-soft', 'velocity-normal', 'velocity-hard');
        
        if (isActive) {
            if (velocity <= 0.3) {
                stepBtn.classList.add('velocity-ghost');
            } else if (velocity <= 0.5) {
                stepBtn.classList.add('velocity-soft');
            } else if (velocity <= 0.8) {
                stepBtn.classList.add('velocity-normal');
            } else {
                stepBtn.classList.add('velocity-hard');
            }
        }
    }
    
    openVelocityModal(trackIndex, stepIndex) {
        this.currentModalTrackIndex = trackIndex;
        this.currentModalStepIndex = stepIndex;
        
        const velocity = this.tracks[trackIndex].velocities[stepIndex];
        const modal = document.getElementById('velocity-modal');
        const slider = document.getElementById('velocity-slider');
        
        slider.value = velocity;
        this.updateVelocityPresets(velocity);
        
        modal.style.display = 'block';
    }
    
    updateVelocityPresets(velocity) {
        document.querySelectorAll('.velocity-btn').forEach(btn => {
            const btnVelocity = parseFloat(btn.dataset.velocity);
            btn.classList.toggle('active', Math.abs(btnVelocity - velocity) < 0.05);
        });
    }
    
    /**
     * Toggle between play and pause states
     * Initializes AudioContext on first use and handles browser autoplay policy
     */
    async togglePlayback() {
        // Initialize audio context if not already done
        if (!this.audioContext) {
            await this.initAudioContext();
        }
        
        // Always try to resume AudioContext on user interaction (browser autoplay policy)
        if (this.audioContext.state === 'suspended') {
            try {
                await this.audioContext.resume();
                console.log('AudioContext resumed');
            } catch (error) {
                console.error('Failed to resume AudioContext:', error);
            }
        }
        
        // Toggle playback state
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }
    
    /**
     * Start playback from current position
     * Updates UI and begins step scheduling
     */
    play() {
        this.isPlaying = true;
        document.getElementById('play-btn').classList.add('active');
        this.scheduleStep();
    }
    
    /**
     * Pause playback without resetting position
     * Maintains current step position for resume
     */
    pause() {
        this.isPlaying = false;
        document.getElementById('play-btn').classList.remove('active');
        if (this.stepInterval) {
            clearTimeout(this.stepInterval);
        }
    }
    
    /**
     * Stop playback and reset to beginning
     * Returns to step 0 and clears visual indicators
     */
    stop() {
        this.pause();
        this.currentStep = 0;
        this.updatePlayhead();
        this.clearCurrentStepIndicators();
    }
    
    /**
     * Schedule and execute the current step in the sequence
     * Handles timing, playback, and visual feedback
     */
    scheduleStep() {
        if (!this.isPlaying) return;
        
        // Execute current step audio and visual updates
        this.playCurrentStep();
        this.updatePlayhead();
        this.highlightCurrentStep();
        
        this.currentStep = (this.currentStep + 1) % 16;
        
        const stepDuration = this.calculateStepDuration();
        this.stepInterval = setTimeout(() => this.scheduleStep(), stepDuration);
    }
    
    calculateStepDuration() {
        const baseDuration = (60 / this.bpm / 4) * 1000;
        
        if (this.swing === 50) {
            return baseDuration;
        }
        
        const isEvenStep = this.currentStep % 2 === 0;
        const swingRatio = this.swing / 100;
        
        if (isEvenStep) {
            return baseDuration * (2 - swingRatio);
        } else {
            return baseDuration * swingRatio;
        }
    }
    
    playCurrentStep() {
        this.tracks.forEach((track, trackIndex) => {
            if (track.steps[this.currentStep] && track.buffer) {
                const velocity = track.velocities[this.currentStep];
                this.playBuffer(track.buffer, velocity);
            }
        });
        
        this.synthTracks.forEach((synthTrack) => {
            const stepData = synthTrack.steps[this.currentStep];
            if (stepData && stepData.note) {
                this.playSynthNote(synthTrack, stepData.note);
            }
        });
    }
    
    /**
     * Play audio buffer through proper effects routing
     * Routes drum sounds through drum effects chain
     */
    playBuffer(buffer, velocity = 0.8) {
        if (!this.audioContext || !buffer || !this.drumEffectsChain) return;
        
        const source = this.audioContext.createBufferSource();
        const gainNode = this.audioContext.createGain();
        source.buffer = buffer;
        
        gainNode.gain.setValueAtTime(velocity, this.audioContext.currentTime);
        
        // Route through drum effects chain instead of directly to master
        source.connect(gainNode);
        gainNode.connect(this.drumEffectsChain);
        source.start();
    }
    
    /**
     * Update the visual playhead position indicator
     * Shows current step position as percentage across the 16 steps
     */
    updatePlayhead() {
        const playhead = document.getElementById('playhead');
        const position = (this.currentStep / 16) * 100;
        playhead.style.left = `${position}%`;
    }
    
    highlightCurrentStep() {
        this.clearCurrentStepIndicators();
        
        document.querySelectorAll(`[data-step="${this.currentStep}"]`).forEach(btn => {
            btn.classList.add('current');
        });
    }
    
    clearCurrentStepIndicators() {
        document.querySelectorAll('.step-btn.current').forEach(btn => {
            btn.classList.remove('current');
        });
    }
    
    /**
     * Set the sequencer's BPM (tempo)
     * Clamps value between 60-200 BPM and updates UI
     */
    setBPM(newBPM) {
        this.bpm = Math.max(60, Math.min(200, newBPM));
        document.getElementById('bpm').value = this.bpm;
    }
    
    handleKeyDown(event) {
        switch(event.key) {
            case ' ':
                event.preventDefault();
                this.togglePlayback();
                break;
            case 'Escape':
                this.stop();
                break;
        }
    }
    
    async loadDefaultSamples() {
        const sampleGenerators = [
            () => this.generateKickSample(),
            () => this.generateSnareSample(),
            () => this.generateHihatSample(),
            () => this.generateCrashSample()
        ];
        
        sampleGenerators.forEach((generator, index) => {
            this.tracks[index].buffer = generator();
            this.tracks[index].isCustomSample = false;
            this.tracks[index].sampleName = null;
        });
        
        this.setupSampleLoadingEventListeners();
    }
    
    generateKickSample() {
        if (!this.audioContext) return null;
        
        const length = this.audioContext.sampleRate * (0.3 * this.drumParams.kick.decayMod);
        const buffer = this.audioContext.createBuffer(1, length, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < length; i++) {
            const t = i / this.audioContext.sampleRate;
            const envelope = Math.exp(-t * (30 / this.drumParams.kick.decayMod));
            const frequency = (this.drumParams.kick.basePitch * this.drumParams.kick.pitchMod) * Math.exp(-t * 15);
            data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.5;
        }
        
        return buffer;
    }
    
    generateSnareSample() {
        if (!this.audioContext) return null;
        
        const length = this.audioContext.sampleRate * 0.2;
        const buffer = this.audioContext.createBuffer(1, length, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < length; i++) {
            const t = i / this.audioContext.sampleRate;
            const envelope = Math.exp(-t * 20);
            const tone = Math.sin(2 * Math.PI * (this.drumParams.snare.basePitch * this.drumParams.snare.pitchMod) * t) * 0.3;
            const noise = (Math.random() * 2 - 1) * (0.7 * this.drumParams.snare.noiseMod);
            data[i] = (tone + noise) * envelope * 0.3;
        }
        
        return buffer;
    }
    
    generateHihatSample() {
        if (!this.audioContext) return null;
        
        const length = this.audioContext.sampleRate * 0.1;
        const buffer = this.audioContext.createBuffer(1, length, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < length; i++) {
            const t = i / this.audioContext.sampleRate;
            const envelope = Math.exp(-t * 50);
            const noise = (Math.random() * 2 - 1);
            const cutoff = this.drumParams.hihat.baseCutoff * this.drumParams.hihat.cutoffMod;
            const filtered = noise * Math.sin(2 * Math.PI * cutoff * t);
            data[i] = filtered * envelope * 0.2;
        }
        
        return buffer;
    }
    
    generateCrashSample() {
        if (!this.audioContext) return null;
        
        const length = this.audioContext.sampleRate * (0.8 * this.drumParams.crash.decayMod);
        const buffer = this.audioContext.createBuffer(1, length, this.audioContext.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < length; i++) {
            const t = i / this.audioContext.sampleRate;
            const envelope = Math.exp(-t * (this.drumParams.crash.baseDecay / this.drumParams.crash.decayMod));
            const noise = (Math.random() * 2 - 1);
            const filtered = noise * (Math.sin(2 * Math.PI * 5000 * t) + Math.sin(2 * Math.PI * 3000 * t));
            data[i] = filtered * envelope * 0.15;
        }
        
        return buffer;
    }
    
    playSynthNote(synthTrack, note) {
        if (!this.audioContext || !note) return;
        
        if (synthTrack.instrument === 'sample' && synthTrack.sampleBuffer) {
            this.playSynthSample(synthTrack, note);
            return;
        }
        
        const preset = this.synthPresets[synthTrack.instrument];
        const frequency = this.noteFrequencies[note];
        const duration = (60 / this.bpm / 4);
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        const filterNode = this.audioContext.createBiquadFilter();
        
        oscillator.type = preset.waveform;
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        
        filterNode.type = 'lowpass';
        filterNode.frequency.setValueAtTime(synthTrack.filterCutoff, this.audioContext.currentTime);
        filterNode.Q.setValueAtTime(5, this.audioContext.currentTime);
        
        const now = this.audioContext.currentTime;
        const attackEnd = now + preset.attack;
        const decayEnd = attackEnd + preset.decay;
        const releaseStart = now + duration - preset.release;
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.2, attackEnd);
        gainNode.gain.linearRampToValueAtTime(0.2 * preset.sustain, decayEnd);
        gainNode.gain.setValueAtTime(0.2 * preset.sustain, releaseStart);
        gainNode.gain.linearRampToValueAtTime(0, now + duration);
        
        // Route through synth effects chain instead of directly to master
        oscillator.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(this.synthEffectsChain);
        
        oscillator.start(now);
        oscillator.stop(now + duration);
    }
    
    playSynthSample(synthTrack, note) {
        if (!synthTrack.sampleBuffer) return;
        
        const source = this.audioContext.createBufferSource();
        const gainNode = this.audioContext.createGain();
        const filterNode = this.audioContext.createBiquadFilter();
        
        const baseNote = 'C3';
        const pitchRatio = this.noteFrequencies[note] / this.noteFrequencies[baseNote];
        
        source.buffer = synthTrack.sampleBuffer;
        source.playbackRate.setValueAtTime(pitchRatio, this.audioContext.currentTime);
        
        filterNode.type = 'lowpass';
        filterNode.frequency.setValueAtTime(synthTrack.filterCutoff, this.audioContext.currentTime);
        filterNode.Q.setValueAtTime(2, this.audioContext.currentTime);
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        
        // Route through synth effects chain instead of directly to master
        source.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(this.synthEffectsChain);
        
        source.start();
    }
    
    async loadSynthSample(trackId) {
        if (!this.audioContext) {
            await this.initAudioContext();
        }
        this.currentLoadingTrack = `synth-${trackId}`;
        const fileInput = document.getElementById('sample-file-input');
        fileInput.click();
    }
    
    clearSynthSample(trackId) {
        const track = this.synthTracks.find(t => t.id === trackId);
        if (track) {
            track.sampleBuffer = null;
            track.sampleName = null;
            if (track.instrument === 'sample') {
                track.instrument = 'bass';
            }
        }
        this.renderSynthTracks();
        console.log(`Cleared synth sample for track ${trackId}`);
    }
    
    addSynthTrack() {
        const trackId = `synth-${Date.now()}`;
        const synthTrack = {
            id: trackId,
            name: `SYN${this.synthTracks.length + 1}`,
            instrument: 'bass',
            filterCutoff: 2000,
            steps: new Array(16).fill(null),
            sampleBuffer: null,
            sampleName: null
        };
        
        this.synthTracks.push(synthTrack);
        this.renderSynthTracks();
    }
    
    removeSynthTrack() {
        if (this.synthTracks.length > 0) {
            this.synthTracks.pop();
            this.renderSynthTracks();
        }
    }
    
    renderSynthTracks() {
        const container = document.getElementById('synth-tracks-container');
        container.innerHTML = '';
        
        this.synthTracks.forEach((synthTrack, trackIndex) => {
            const trackElement = document.createElement('div');
            trackElement.className = 'synth-track';
            trackElement.innerHTML = `
                <div class="synth-track-controls">
                    <div class="synth-track-info">
                        <div class="synth-track-label">${synthTrack.name}</div>
                    </div>
                    <select class="synth-instrument-select" data-track-id="${synthTrack.id}">
                        <option value="bass" ${synthTrack.instrument === 'bass' ? 'selected' : ''}>BASS</option>
                        <option value="lead" ${synthTrack.instrument === 'lead' ? 'selected' : ''}>LEAD</option>
                        <option value="pad" ${synthTrack.instrument === 'pad' ? 'selected' : ''}>PAD</option>
                        <option value="pluck" ${synthTrack.instrument === 'pluck' ? 'selected' : ''}>PLUCK</option>
                        <option value="organ" ${synthTrack.instrument === 'organ' ? 'selected' : ''}>ORGAN</option>
                        <option value="sample" ${synthTrack.instrument === 'sample' ? 'selected' : ''}>SAMPLE</option>
                    </select>
                    <div class="synth-sample-controls">
                        <button class="sample-btn load-synth-sample" data-track-id="${synthTrack.id}" title="Load Sample">📁</button>
                        <button class="sample-btn clear-synth-sample" data-track-id="${synthTrack.id}" title="Clear Sample">🗑️</button>
                    </div>
                </div>
                <div class="synth-track-steps">
                    ${Array.from({length: 16}, (_, i) => {
                        const stepData = synthTrack.steps[i];
                        const isActive = stepData && stepData.note;
                        const note = isActive ? stepData.note : '';
                        return `<div class="synth-step ${isActive ? 'active' : ''}" data-track-id="${synthTrack.id}" data-step="${i}">
                            <div class="synth-step-note">${note}</div>
                        </div>`;
                    }).join('')}
                </div>
            `;
            container.appendChild(trackElement);
        });
        
        this.attachSynthTrackEventListeners();
    }
    
    attachSynthTrackEventListeners() {
        document.querySelectorAll('.synth-step').forEach(btn => {
            btn.addEventListener('click', (e) => this.toggleStep(e));
        });
        
        document.querySelectorAll('.synth-instrument-select').forEach(select => {
            select.addEventListener('change', (e) => {
                const trackId = e.target.dataset.trackId;
                const track = this.synthTracks.find(t => t.id === trackId);
                if (track) {
                    track.instrument = e.target.value;
                }
            });
        });
        
        document.querySelectorAll('.load-synth-sample').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const trackId = e.target.dataset.trackId;
                this.loadSynthSample(trackId);
            });
        });
        
        document.querySelectorAll('.clear-synth-sample').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const trackId = e.target.dataset.trackId;
                this.clearSynthSample(trackId);
            });
        });
    }
    
    openNoteModal(trackId, stepIndex) {
        this.currentModalTrackId = trackId;
        this.currentModalStepIndex = stepIndex;
        document.getElementById('note-modal').style.display = 'block';
    }
    
    closeNoteModal() {
        document.getElementById('note-modal').style.display = 'none';
        this.currentModalTrackId = null;
        this.currentModalStepIndex = null;
    }
    
    selectNote(note) {
        if (this.currentModalTrackId && this.currentModalStepIndex !== null) {
            const track = this.synthTracks.find(t => t.id === this.currentModalTrackId);
            if (track) {
                if (note === '') {
                    track.steps[this.currentModalStepIndex] = null;
                } else {
                    track.steps[this.currentModalStepIndex] = { note: note };
                }
                this.renderSynthTracks();
            }
        }
        this.closeNoteModal();
    }
    
    setupModalEventListeners() {
        document.querySelectorAll('.modal-close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                if (e.target.closest('#note-modal')) {
                    this.closeNoteModal();
                } else if (e.target.closest('#velocity-modal')) {
                    this.closeVelocityModal();
                } else if (e.target.closest('#sample-assign-modal')) {
                    this.closeSampleAssignModal();
                }
            });
        });
        
        document.getElementById('note-modal').addEventListener('click', (e) => {
            if (e.target.id === 'note-modal') {
                this.closeNoteModal();
            }
        });
        
        document.getElementById('velocity-modal').addEventListener('click', (e) => {
            if (e.target.id === 'velocity-modal') {
                this.closeVelocityModal();
            }
        });
        
        document.querySelectorAll('.note-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectNote(e.target.dataset.note);
            });
        });
        
        document.querySelectorAll('.velocity-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const velocity = parseFloat(e.target.dataset.velocity);
                document.getElementById('velocity-slider').value = velocity;
                this.updateVelocityPresets(velocity);
            });
        });
        
        document.getElementById('velocity-slider').addEventListener('input', (e) => {
            this.updateVelocityPresets(parseFloat(e.target.value));
        });
        
        document.getElementById('velocity-apply').addEventListener('click', () => {
            this.applyVelocity();
        });
        
        document.getElementById('velocity-clear').addEventListener('click', () => {
            this.clearStep();
        });
        
        document.getElementById('sample-assign-modal').addEventListener('click', (e) => {
            if (e.target.id === 'sample-assign-modal') {
                this.closeSampleAssignModal();
            }
        });
        
        document.querySelectorAll('.track-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const trackIndex = parseInt(e.target.dataset.track);
                this.assignSampleToTrack(trackIndex);
                this.closeSampleAssignModal();
            });
        });
        
        document.getElementById('sample-cancel').addEventListener('click', () => {
            this.closeSampleAssignModal();
        });
    }
    
    closeVelocityModal() {
        document.getElementById('velocity-modal').style.display = 'none';
    }
    
    closeSampleAssignModal() {
        document.getElementById('sample-assign-modal').style.display = 'none';
    }
    
    applyVelocity() {
        const velocity = parseFloat(document.getElementById('velocity-slider').value);
        this.tracks[this.currentModalTrackIndex].velocities[this.currentModalStepIndex] = velocity;
        this.updateStepVisual(this.currentModalTrackIndex, this.currentModalStepIndex);
        this.closeVelocityModal();
    }
    
    clearStep() {
        this.tracks[this.currentModalTrackIndex].steps[this.currentModalStepIndex] = false;
        this.updateStepVisual(this.currentModalTrackIndex, this.currentModalStepIndex);
        this.closeVelocityModal();
    }
    
    setupSampleLoadingEventListeners() {
        document.querySelectorAll('.load-sample').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const trackIndex = parseInt(e.target.dataset.track);
                this.loadSample(trackIndex);
            });
        });
        
        document.querySelectorAll('.clear-sample').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const trackIndex = parseInt(e.target.dataset.track);
                this.clearSample(trackIndex);
            });
        });
        
        document.getElementById('sample-file-input').addEventListener('change', (e) => {
            this.handleSampleFile(e.target.files[0]);
        });
    }
    
    async loadSample(trackIndex) {
        if (!this.audioContext) {
            await this.initAudioContext();
        }
        this.currentLoadingTrack = trackIndex;
        const fileInput = document.getElementById('sample-file-input');
        fileInput.click();
    }
    
    async handleSampleFile(file) {
        if (!file || this.currentLoadingTrack === null) return;
        
        try {
            const arrayBuffer = await file.arrayBuffer();
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            
            if (typeof this.currentLoadingTrack === 'string' && this.currentLoadingTrack.startsWith('synth-')) {
                const trackId = this.currentLoadingTrack.replace('synth-', '');
                const track = this.synthTracks.find(t => t.id === trackId);
                if (track) {
                    track.sampleBuffer = audioBuffer;
                    track.sampleName = file.name;
                    track.instrument = 'sample';
                    this.renderSynthTracks();
                }
                console.log(`Loaded synth sample: ${file.name} for track ${trackId}`);
            } else {
                const trackIndex = typeof this.currentLoadingTrack === 'number' ? this.currentLoadingTrack : parseInt(this.currentLoadingTrack);
                
                if (trackIndex >= 0 && trackIndex < this.tracks.length && this.tracks[trackIndex]) {
                    this.tracks[trackIndex].buffer = audioBuffer;
                    this.tracks[trackIndex].isCustomSample = true;
                    this.tracks[trackIndex].sampleName = file.name;
                    
                    this.updateTrackLabelVisual(trackIndex, true);
                    console.log(`Loaded drum sample: ${file.name} for track ${trackIndex}`);
                } else {
                    console.error(`Invalid track index: ${trackIndex}, tracks length: ${this.tracks.length}`);
                }
            }
            
        } catch (error) {
            console.error('Error loading sample:', error);
            alert('Error loading sample. Please try a different audio file.');
        }
        
        this.currentLoadingTrack = null;
        document.getElementById('sample-file-input').value = '';
    }
    
    clearSample(trackIndex) {
        this.tracks[trackIndex].isCustomSample = false;
        this.tracks[trackIndex].sampleName = null;
        
        const sampleGenerators = [
            () => this.generateKickSample(),
            () => this.generateSnareSample(),
            () => this.generateHihatSample(),
            () => this.generateCrashSample()
        ];
        
        this.tracks[trackIndex].buffer = sampleGenerators[trackIndex]();
        this.updateTrackLabelVisual(trackIndex, false);
        
        console.log(`Cleared sample for track ${trackIndex}`);
    }
    
    updateTrackLabelVisual(trackIndex, isLoaded) {
        const trackLabels = document.querySelectorAll('.track-label');
        const label = trackLabels[trackIndex];
        
        if (isLoaded) {
            label.classList.add('loaded');
            if (this.tracks[trackIndex].sampleName) {
                const shortName = this.tracks[trackIndex].sampleName.substring(0, 8);
                label.textContent = shortName.toUpperCase();
            }
        } else {
            label.classList.remove('loaded');
            const defaultNames = ['KICK', 'SNARE', 'HIHAT', 'CRASH'];
            label.textContent = defaultNames[trackIndex];
        }
    }
    
    clear() {
        this.tracks.forEach(track => {
            track.steps.fill(false);
        });
        
        this.synthTracks.forEach(track => {
            track.steps.fill(null);
        });
        
        document.querySelectorAll('.step-btn.active').forEach(btn => {
            btn.classList.remove('active');
        });
        
        this.renderSynthTracks();
    }
    
    updateKnobValue(knobNumber, value) {
        this.knobMappings[knobNumber].value = value;
        
        const knob = document.getElementById(`knob${knobNumber}`);
        const indicator = knob.nextElementSibling;
        
        knob.style.setProperty(`--knob${knobNumber}-value`, value);
        
        const rotation = (value - 50) * 2.7;
        indicator.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
        
        this.applyKnobParameter(knobNumber);
    }
    
    updateKnobTarget(knobNumber, target) {
        this.knobMappings[knobNumber].target = target;
        this.applyKnobParameter(knobNumber);
    }
    
    applyKnobParameter(knobNumber) {
        const mapping = this.knobMappings[knobNumber];
        const normalizedValue = mapping.value / 100;
        
        switch(mapping.target) {
            case 'kick.pitch':
                this.drumParams.kick.pitchMod = 0.5 + (normalizedValue * 1.5);
                this.regenerateSamples();
                break;
            case 'kick.decay':
                this.drumParams.kick.decayMod = 0.3 + (normalizedValue * 1.4);
                this.regenerateSamples();
                break;
            case 'snare.pitch':
                this.drumParams.snare.pitchMod = 0.5 + (normalizedValue * 2);
                this.regenerateSamples();
                break;
            case 'snare.noise':
                this.drumParams.snare.noiseMod = 0.2 + (normalizedValue * 1.6);
                this.regenerateSamples();
                break;
            case 'hihat.cutoff':
                this.drumParams.hihat.cutoffMod = 0.2 + (normalizedValue * 1.6);
                this.regenerateSamples();
                break;
            case 'crash.decay':
                this.drumParams.crash.decayMod = 0.3 + (normalizedValue * 1.4);
                this.regenerateSamples();
                break;
            case 'synth.cutoff':
                this.synthTracks.forEach(track => {
                    track.filterCutoff = 200 + (normalizedValue * 7800);
                });
                break;
            case 'synth.attack':
                Object.values(this.synthPresets).forEach(preset => {
                    preset.attack = 0.001 + (normalizedValue * 0.5);
                });
                break;
            case 'synth.release':
                Object.values(this.synthPresets).forEach(preset => {
                    preset.release = 0.1 + (normalizedValue * 1.9);
                });
                break;
            case 'master.volume':
                if (this.masterGain) {
                    this.masterGain.gain.setValueAtTime(normalizedValue, this.audioContext.currentTime);
                }
                break;
            case 'compressor.threshold':
                if (this.effects.compressor.compressor) {
                    const threshold = -40 + (normalizedValue * 40);
                    this.effects.compressor.threshold = threshold;
                    this.effects.compressor.compressor.threshold.setValueAtTime(threshold, this.audioContext.currentTime);
                }
                break;
            case 'compressor.ratio':
                if (this.effects.compressor.compressor) {
                    const ratio = 1 + (normalizedValue * 19);
                    this.effects.compressor.ratio = ratio;
                    this.effects.compressor.compressor.ratio.setValueAtTime(ratio, this.audioContext.currentTime);
                }
                break;
            case 'swing':
                this.swing = 50 + (normalizedValue * 25);
                document.getElementById('swing').value = this.swing;
                document.getElementById('swing-value').textContent = `${Math.round(this.swing)}%`;
                break;
        }
    }
    
    regenerateSamples() {
        if (!this.audioContext) return;
        
        const sampleGenerators = [
            () => this.generateKickSample(),
            () => this.generateSnareSample(),
            () => this.generateHihatSample(),
            () => this.generateCrashSample()
        ];
        
        sampleGenerators.forEach((generator, index) => {
            this.tracks[index].buffer = generator();
        });
    }
    
    async initializeEffects() {
        await this.createReverbEffect();
        this.createDelayEffect();
        this.createDistortionEffect();
        this.createChorusEffect();
        this.createCompressorEffect();
    }
    
    async createReverbEffect() {
        this.effects.reverb.convolver = this.audioContext.createConvolver();
        this.effects.reverb.wetGain = this.audioContext.createGain();
        this.effects.reverb.dryGain = this.audioContext.createGain();
        
        const impulseBuffer = await this.createReverbImpulse();
        this.effects.reverb.convolver.buffer = impulseBuffer;
        
        this.effects.reverb.wetGain.gain.setValueAtTime(this.effects.reverb.wetLevel, this.audioContext.currentTime);
        this.effects.reverb.dryGain.gain.setValueAtTime(1 - this.effects.reverb.wetLevel, this.audioContext.currentTime);
    }
    
    async createReverbImpulse() {
        const duration = 2;
        const sampleRate = this.audioContext.sampleRate;
        const length = sampleRate * duration;
        const impulse = this.audioContext.createBuffer(2, length, sampleRate);
        
        for (let channel = 0; channel < 2; channel++) {
            const channelData = impulse.getChannelData(channel);
            for (let i = 0; i < length; i++) {
                const decay = Math.pow(1 - (i / length), this.effects.reverb.roomSize * 10);
                channelData[i] = (Math.random() * 2 - 1) * decay * 0.3;
            }
        }
        
        return impulse;
    }
    
    createDelayEffect() {
        this.effects.delay.delayNode = this.audioContext.createDelay(1.0);
        this.effects.delay.feedbackGain = this.audioContext.createGain();
        this.effects.delay.wetGain = this.audioContext.createGain();
        this.effects.delay.dryGain = this.audioContext.createGain();
        
        this.effects.delay.delayNode.delayTime.setValueAtTime(this.effects.delay.time / 1000, this.audioContext.currentTime);
        this.effects.delay.feedbackGain.gain.setValueAtTime(this.effects.delay.feedback, this.audioContext.currentTime);
        this.effects.delay.wetGain.gain.setValueAtTime(this.effects.delay.wetLevel, this.audioContext.currentTime);
        this.effects.delay.dryGain.gain.setValueAtTime(1 - this.effects.delay.wetLevel, this.audioContext.currentTime);
        
        this.effects.delay.delayNode.connect(this.effects.delay.feedbackGain);
        this.effects.delay.feedbackGain.connect(this.effects.delay.delayNode);
    }
    
    createDistortionEffect() {
        this.effects.distortion.waveshaper = this.audioContext.createWaveShaper();
        this.effects.distortion.filter = this.audioContext.createBiquadFilter();
        
        this.effects.distortion.filter.type = 'lowpass';
        this.effects.distortion.filter.frequency.setValueAtTime(this.effects.distortion.tone, this.audioContext.currentTime);
        
        this.updateDistortionCurve();
    }
    
    updateDistortionCurve() {
        const samples = 44100;
        const curve = new Float32Array(samples);
        const deg = Math.PI / 180;
        const drive = this.effects.distortion.drive * 100;
        
        for (let i = 0; i < samples; i++) {
            const x = (i * 2) / samples - 1;
            curve[i] = ((3 + drive) * x * 20 * deg) / (Math.PI + drive * Math.abs(x));
        }
        
        this.effects.distortion.waveshaper.curve = curve;
        this.effects.distortion.waveshaper.oversample = '4x';
    }
    
    createChorusEffect() {
        this.effects.chorus.lfo = this.audioContext.createOscillator();
        this.effects.chorus.lfoGain = this.audioContext.createGain();
        this.effects.chorus.delay1 = this.audioContext.createDelay(0.1);
        this.effects.chorus.delay2 = this.audioContext.createDelay(0.1);
        this.effects.chorus.wetGain = this.audioContext.createGain();
        this.effects.chorus.dryGain = this.audioContext.createGain();
        
        this.effects.chorus.lfo.type = 'sine';
        this.effects.chorus.lfo.frequency.setValueAtTime(this.effects.chorus.rate, this.audioContext.currentTime);
        this.effects.chorus.lfoGain.gain.setValueAtTime(this.effects.chorus.depth * 0.01, this.audioContext.currentTime);
        
        this.effects.chorus.delay1.delayTime.setValueAtTime(0.02, this.audioContext.currentTime);
        this.effects.chorus.delay2.delayTime.setValueAtTime(0.03, this.audioContext.currentTime);
        
        this.effects.chorus.wetGain.gain.setValueAtTime(0.5, this.audioContext.currentTime);
        this.effects.chorus.dryGain.gain.setValueAtTime(0.5, this.audioContext.currentTime);
        
        this.effects.chorus.lfo.connect(this.effects.chorus.lfoGain);
        this.effects.chorus.lfoGain.connect(this.effects.chorus.delay1.delayTime);
        this.effects.chorus.lfoGain.connect(this.effects.chorus.delay2.delayTime);
        
        this.effects.chorus.lfo.start();
    }
    
    createCompressorEffect() {
        this.effects.compressor.compressor = this.audioContext.createDynamicsCompressor();
        
        this.effects.compressor.compressor.threshold.setValueAtTime(this.effects.compressor.threshold, this.audioContext.currentTime);
        this.effects.compressor.compressor.ratio.setValueAtTime(this.effects.compressor.ratio, this.audioContext.currentTime);
        this.effects.compressor.compressor.attack.setValueAtTime(this.effects.compressor.attack, this.audioContext.currentTime);
        this.effects.compressor.compressor.release.setValueAtTime(this.effects.compressor.release, this.audioContext.currentTime);
        this.effects.compressor.compressor.knee.setValueAtTime(10, this.audioContext.currentTime);
    }
    
    /**
     * Connect the complete effects chain routing system
     * Creates separate processing chains for drums and synths with proper effect routing
     */
    connectEffectsChain() {
        // Create input chains for drums and synths
        this.drumEffectsChain = this.audioContext.createGain();
        this.synthEffectsChain = this.audioContext.createGain();
        
        // Route each chain through its enabled effects, then to master
        this.connectChainToEffects('drums', this.drumEffectsChain);
        this.connectChainToEffects('synths', this.synthEffectsChain);
        
        // Connect master output through compressor to destination
        if (this.effects.compressor.enabled) {
            this.masterGain.connect(this.effects.compressor.compressor);
            this.effects.compressor.compressor.connect(this.audioContext.destination);
        } else {
            this.masterGain.connect(this.audioContext.destination);
        }
    }
    
    /**
     * Route a track chain through its enabled effects
     * Creates dynamic effect routing based on routing matrix settings
     */
    connectChainToEffects(trackType, inputChain) {
        const routing = this.effectsRouting[trackType];
        let currentNode = inputChain;
        
        // Process each effect in order: reverb -> delay -> distortion -> chorus
        if (routing.reverb && this.effects.reverb.enabled) {
            currentNode = this.connectThroughEffect(currentNode, 'reverb');
        }
        if (routing.delay && this.effects.delay.enabled) {
            currentNode = this.connectThroughEffect(currentNode, 'delay');
        }
        if (routing.distortion && this.effects.distortion.enabled) {
            currentNode = this.connectThroughEffect(currentNode, 'distortion');
        }
        if (routing.chorus && this.effects.chorus.enabled) {
            currentNode = this.connectThroughEffect(currentNode, 'chorus');
        }
        
        // Connect final processed signal to master
        currentNode.connect(this.masterGain);
    }
    
    /**
     * Connect audio through a specific effect with proper wet/dry mixing
     * Returns the output node for chaining additional effects
     */
    connectThroughEffect(inputNode, effectType) {
        const effect = this.effects[effectType];
        const outputGain = this.audioContext.createGain();
        
        switch (effectType) {
            case 'reverb':
                // Wet path through convolver
                inputNode.connect(effect.convolver);
                effect.convolver.connect(effect.wetGain);
                effect.wetGain.connect(outputGain);
                
                // Dry path
                inputNode.connect(effect.dryGain);
                effect.dryGain.connect(outputGain);
                break;
                
            case 'delay':
                // Wet path through delay
                inputNode.connect(effect.delayNode);
                effect.delayNode.connect(effect.wetGain);
                effect.wetGain.connect(outputGain);
                
                // Dry path
                inputNode.connect(effect.dryGain);
                effect.dryGain.connect(outputGain);
                break;
                
            case 'distortion':
                // Process through waveshaper and filter
                inputNode.connect(effect.waveshaper);
                effect.waveshaper.connect(effect.filter);
                effect.filter.connect(outputGain);
                break;
                
            case 'chorus':
                // Wet path through modulated delays
                inputNode.connect(effect.delay1);
                inputNode.connect(effect.delay2);
                effect.delay1.connect(effect.wetGain);
                effect.delay2.connect(effect.wetGain);
                effect.wetGain.connect(outputGain);
                
                // Dry path
                inputNode.connect(effect.dryGain);
                effect.dryGain.connect(outputGain);
                break;
        }
        
        return outputGain;
    }
    
    updateEffectsRouting() {
        if (!this.audioContext || !this.drumEffectsChain || !this.synthEffectsChain) return;
        
        this.drumEffectsChain.disconnect();
        this.synthEffectsChain.disconnect();
        
        this.connectChainToEffects('drums', this.drumEffectsChain);
        this.connectChainToEffects('synths', this.synthEffectsChain);
    }
    
    setupEffectsEventListeners() {
        this.setupEffectControls();
        this.setupRoutingControls();
        this.setupAudioInputControls();
    }
    
    setupEffectControls() {
        const effectSliders = [
            { id: 'reverb-room', effect: 'reverb', param: 'roomSize', format: '%' },
            { id: 'reverb-wet', effect: 'reverb', param: 'wetLevel', format: '%' },
            { id: 'delay-time', effect: 'delay', param: 'time', format: 'ms' },
            { id: 'delay-feedback', effect: 'delay', param: 'feedback', format: '%' },
            { id: 'delay-wet', effect: 'delay', param: 'wetLevel', format: '%' },
            { id: 'distortion-drive', effect: 'distortion', param: 'drive', format: '%' },
            { id: 'distortion-tone', effect: 'distortion', param: 'tone', format: 'kHz' },
            { id: 'chorus-rate', effect: 'chorus', param: 'rate', format: 'Hz' },
            { id: 'chorus-depth', effect: 'chorus', param: 'depth', format: '%' },
            { id: 'compressor-threshold', effect: 'compressor', param: 'threshold', format: 'dB' },
            { id: 'compressor-ratio', effect: 'compressor', param: 'ratio', format: ':1' },
            { id: 'compressor-attack', effect: 'compressor', param: 'attack', format: 'ms' },
            { id: 'compressor-release', effect: 'compressor', param: 'release', format: 'ms' }
        ];
        
        effectSliders.forEach(slider => {
            const element = document.getElementById(slider.id);
            const valueDisplay = element.parentElement.querySelector('.effect-value');
            
            element.addEventListener('input', async (e) => {
                if (!this.audioContext) {
                    await this.initAudioContext();
                }
                let value = parseFloat(e.target.value);
                
                if (slider.format === '%') {
                    this.effects[slider.effect][slider.param] = value / 100;
                    valueDisplay.textContent = `${Math.round(value)}%`;
                } else if (slider.format === 'ms') {
                    this.effects[slider.effect][slider.param] = value;
                    if (slider.param === 'attack' || slider.param === 'release') {
                        valueDisplay.textContent = `${Math.round(value * 1000)}ms`;
                    } else {
                        valueDisplay.textContent = `${Math.round(value)}ms`;
                    }
                } else if (slider.format === 'kHz') {
                    this.effects[slider.effect][slider.param] = value;
                    valueDisplay.textContent = `${(value / 1000).toFixed(1)}kHz`;
                } else if (slider.format === 'Hz') {
                    this.effects[slider.effect][slider.param] = value;
                    valueDisplay.textContent = `${value}Hz`;
                } else if (slider.format === 'dB') {
                    this.effects[slider.effect][slider.param] = value;
                    valueDisplay.textContent = `${value}dB`;
                } else if (slider.format === ':1') {
                    this.effects[slider.effect][slider.param] = value;
                    valueDisplay.textContent = `${value}:1`;
                }
                
                this.updateEffectParameter(slider.effect, slider.param, this.effects[slider.effect][slider.param]);
            });
        });
        
        document.querySelectorAll('.bypass-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const effectName = e.target.id.replace('-bypass', '');
                this.toggleEffect(effectName);
            });
        });
    }
    
    setupRoutingControls() {
        document.querySelectorAll('.routing-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const track = e.target.dataset.track;
                const effect = e.target.dataset.effect;
                
                this.effectsRouting[track][effect] = !this.effectsRouting[track][effect];
                this.updateEffectsRouting();
                e.target.classList.toggle('active', this.effectsRouting[track][effect]);
            });
        });
    }
    
    toggleEffect(effectName) {
        this.effects[effectName].enabled = !this.effects[effectName].enabled;
        const btn = document.getElementById(`${effectName}-bypass`);
        
        btn.classList.toggle('active', this.effects[effectName].enabled);
        btn.textContent = this.effects[effectName].enabled ? 'ON' : 'OFF';
        
        if (effectName === 'compressor') {
            this.reconnectMasterOutput();
        } else {
            this.updateEffectsRouting();
        }
    }
    
    reconnectMasterOutput() {
        this.masterGain.disconnect();
        
        if (this.effects.compressor.enabled) {
            this.masterGain.connect(this.effects.compressor.compressor);
            this.effects.compressor.compressor.disconnect();
            this.effects.compressor.compressor.connect(this.audioContext.destination);
        } else {
            this.masterGain.connect(this.audioContext.destination);
        }
    }
    
    updateEffectParameter(effect, param, value) {
        switch(effect) {
            case 'reverb':
                if (param === 'roomSize') {
                    this.createReverbImpulse().then(impulse => {
                        this.effects.reverb.convolver.buffer = impulse;
                    });
                } else if (param === 'wetLevel') {
                    this.effects.reverb.wetGain.gain.setValueAtTime(value, this.audioContext.currentTime);
                    this.effects.reverb.dryGain.gain.setValueAtTime(1 - value, this.audioContext.currentTime);
                }
                break;
                
            case 'delay':
                if (param === 'time') {
                    this.effects.delay.delayNode.delayTime.setValueAtTime(value / 1000, this.audioContext.currentTime);
                } else if (param === 'feedback') {
                    this.effects.delay.feedbackGain.gain.setValueAtTime(value, this.audioContext.currentTime);
                } else if (param === 'wetLevel') {
                    this.effects.delay.wetGain.gain.setValueAtTime(value, this.audioContext.currentTime);
                    this.effects.delay.dryGain.gain.setValueAtTime(1 - value, this.audioContext.currentTime);
                }
                break;
                
            case 'distortion':
                if (param === 'drive') {
                    this.updateDistortionCurve();
                } else if (param === 'tone') {
                    this.effects.distortion.filter.frequency.setValueAtTime(value, this.audioContext.currentTime);
                }
                break;
                
            case 'chorus':
                if (param === 'rate') {
                    this.effects.chorus.lfo.frequency.setValueAtTime(value, this.audioContext.currentTime);
                } else if (param === 'depth') {
                    this.effects.chorus.lfoGain.gain.setValueAtTime(value * 0.01, this.audioContext.currentTime);
                }
                break;
                
            case 'compressor':
                if (param === 'threshold') {
                    this.effects.compressor.compressor.threshold.setValueAtTime(value, this.audioContext.currentTime);
                } else if (param === 'ratio') {
                    this.effects.compressor.compressor.ratio.setValueAtTime(value, this.audioContext.currentTime);
                } else if (param === 'attack') {
                    this.effects.compressor.compressor.attack.setValueAtTime(value, this.audioContext.currentTime);
                } else if (param === 'release') {
                    this.effects.compressor.compressor.release.setValueAtTime(value, this.audioContext.currentTime);
                }
                break;
        }
    }
    
    setupAudioInputControls() {
        document.getElementById('mic-enable').addEventListener('click', () => {
            this.toggleMicrophone();
        });
        
        document.getElementById('input-gain').addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            if (this.micGain) {
                this.micGain.gain.setValueAtTime(value / 100, this.audioContext.currentTime);
            }
            document.querySelector('#input-gain + .input-value').textContent = `${value}%`;
        });
        
        document.getElementById('sample-record').addEventListener('click', () => {
            this.toggleSampleRecording();
        });
        
        document.getElementById('sample-assign').addEventListener('click', () => {
            this.openSampleAssignModal();
        });
        
        this.startInputLevelMonitoring();
    }
    
    async toggleMicrophone() {
        if (this.micEnabled) {
            this.disableMicrophone();
        } else {
            await this.enableMicrophone();
        }
    }
    
    async enableMicrophone() {
        try {
            if (!this.audioContext) {
                await this.initAudioContext();
            }
            
            this.micStream = await navigator.mediaDevices.getUserMedia({ 
                audio: {
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false
                } 
            });
            
            this.micSource = this.audioContext.createMediaStreamSource(this.micStream);
            this.micGain = this.audioContext.createGain();
            this.analyser = this.audioContext.createAnalyser();
            
            this.analyser.fftSize = 256;
            this.analyser.smoothingTimeConstant = 0.8;
            
            this.micSource.connect(this.micGain);
            this.micGain.connect(this.analyser);
            
            const gainValue = parseInt(document.getElementById('input-gain').value) / 100;
            this.micGain.gain.setValueAtTime(gainValue, this.audioContext.currentTime);
            
            this.micEnabled = true;
            
            const micBtn = document.getElementById('mic-enable');
            micBtn.classList.add('active');
            micBtn.innerHTML = '🎤 MIC ON';
            
            document.getElementById('sample-record').disabled = false;
            
            console.log('Microphone enabled');
            
        } catch (error) {
            console.error('Error enabling microphone:', error);
            alert('Microphone access denied. Please check your browser permissions.');
        }
    }
    
    disableMicrophone() {
        if (this.micStream) {
            this.micStream.getTracks().forEach(track => track.stop());
            this.micStream = null;
        }
        
        if (this.micSource) {
            this.micSource.disconnect();
            this.micSource = null;
        }
        
        if (this.micGain) {
            this.micGain.disconnect();
            this.micGain = null;
        }
        
        if (this.analyser) {
            this.analyser.disconnect();
            this.analyser = null;
        }
        
        this.micEnabled = false;
        
        const micBtn = document.getElementById('mic-enable');
        micBtn.classList.remove('active');
        micBtn.innerHTML = '🎤 ENABLE MIC';
        
        document.getElementById('sample-record').disabled = true;
        document.getElementById('sample-assign').disabled = true;
        
        console.log('Microphone disabled');
    }
    
    startInputLevelMonitoring() {
        const updateLevel = () => {
            if (this.analyser) {
                this.analyser.getFloatTimeDomainData(this.inputLevel);
                
                let sum = 0;
                for (let i = 0; i < this.inputLevel.length; i++) {
                    sum += this.inputLevel[i] * this.inputLevel[i];
                }
                const rms = Math.sqrt(sum / this.inputLevel.length);
                const level = Math.min(100, rms * 1000);
                
                const levelBar = document.getElementById('input-level');
                levelBar.style.width = `${level}%`;
            }
            
            requestAnimationFrame(updateLevel);
        };
        
        updateLevel();
    }
    
    async toggleSampleRecording() {
        if (this.sampleRecording) {
            this.stopSampleRecording();
        } else {
            await this.startSampleRecording();
        }
    }
    
    async startSampleRecording() {
        if (!this.micEnabled || !this.micStream) return;
        
        try {
            this.sampleRecorder = new MediaRecorder(this.micStream, {
                mimeType: 'audio/webm;codecs=opus'
            });
            
            this.sampleChunks = [];
            
            this.sampleRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    this.sampleChunks.push(event.data);
                }
            };
            
            this.sampleRecorder.onstop = () => {
                this.processSample();
            };
            
            this.sampleRecorder.start();
            this.sampleRecording = true;
            
            const recordBtn = document.getElementById('sample-record');
            recordBtn.classList.add('active');
            recordBtn.innerHTML = '⏹ STOP';
            
            console.log('Sample recording started');
            
        } catch (error) {
            console.error('Error starting sample recording:', error);
        }
    }
    
    stopSampleRecording() {
        if (this.sampleRecorder && this.sampleRecorder.state !== 'inactive') {
            this.sampleRecorder.stop();
        }
        
        this.sampleRecording = false;
        
        const recordBtn = document.getElementById('sample-record');
        recordBtn.classList.remove('active');
        recordBtn.innerHTML = '⏺ SAMPLE';
        
        console.log('Sample recording stopped');
    }
    
    async processSample() {
        if (this.sampleChunks.length === 0) return;
        
        const blob = new Blob(this.sampleChunks, { type: 'audio/webm;codecs=opus' });
        
        try {
            const arrayBuffer = await blob.arrayBuffer();
            const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
            
            this.currentSample = audioBuffer;
            
            document.getElementById('sample-assign').disabled = false;
            
            console.log('Sample processed and ready for assignment');
            
        } catch (error) {
            console.error('Error processing sample:', error);
        }
    }
    
    openSampleAssignModal() {
        if (!this.currentSample) return;
        
        const modal = document.getElementById('sample-assign-modal');
        modal.style.display = 'block';
    }
    
    assignSampleToTrack(trackIndex) {
        if (!this.currentSample || trackIndex >= this.tracks.length) return;
        
        this.tracks[trackIndex].buffer = this.currentSample;
        
        console.log(`Sample assigned to track ${this.tracks[trackIndex].name}`);
        
        // Reset sample assignment button
        document.getElementById('sample-assign').disabled = true;
        this.currentSample = null;
        
        // Show success message briefly
        this.showSampleAssignedMessage(this.tracks[trackIndex].name);
    }
    
    showSampleAssignedMessage(trackName) {
        // Create temporary message element
        const message = document.createElement('div');
        message.className = 'sample-success-message';
        message.textContent = `Sample assigned to ${trackName}!`;
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(145deg, #00ff9d, #00cc7d);
            color: #000;
            padding: 12px 24px;
            border-radius: 6px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 20px rgba(0, 255, 157, 0.6);
            z-index: 10000;
            animation: fadeInOut 2s ease-in-out;
        `;
        
        // Add fade animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
                20%, 80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(message);
        
        // Remove after animation
        setTimeout(() => {
            document.body.removeChild(message);
            document.head.removeChild(style);
        }, 2000);
    }
    
    reconnectForRecording() {
        if (this.effects.compressor.enabled && this.effects.compressor.compressor) {
            this.effects.compressor.compressor.connect(this.recordingDestination);
        } else {
            this.masterGain.connect(this.recordingDestination);
        }
    }
    
    disconnectRecording() {
        if (this.recordingDestination) {
            if (this.effects.compressor.enabled && this.effects.compressor.compressor) {
                try {
                    this.effects.compressor.compressor.disconnect(this.recordingDestination);
                } catch (e) {}
            } else {
                try {
                    this.masterGain.disconnect(this.recordingDestination);
                } catch (e) {}
            }
        }
    }
    
    async toggleRecording() {
        if (this.isRecording) {
            this.stopRecording();
        } else {
            await this.startRecording();
        }
    }
    
    async startRecording() {
        if (!this.audioContext) {
            await this.initAudioContext();
        }
        
        try {
            this.recordingDestination = this.audioContext.createMediaStreamDestination();
            
            this.reconnectForRecording();
            
            this.mediaRecorder = new MediaRecorder(this.recordingDestination.stream, {
                mimeType: 'audio/webm;codecs=opus'
            });
            
            this.recordedChunks = [];
            
            this.mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    this.recordedChunks.push(event.data);
                }
            };
            
            this.mediaRecorder.onstop = () => {
                this.processRecording();
            };
            
            this.mediaRecorder.start(100);
            this.isRecording = true;
            this.recordingStartTime = Date.now();
            
            const recordBtn = document.getElementById('record-btn');
            recordBtn.classList.add('active');
            recordBtn.innerHTML = '⏹ STOP';
            
            console.log('Recording started');
            
        } catch (error) {
            console.error('Error starting recording:', error);
            alert('Recording failed to start. Please check your browser permissions.');
        }
    }
    
    stopRecording() {
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
            this.mediaRecorder.stop();
        }
        
        this.disconnectRecording();
        this.isRecording = false;
        
        const recordBtn = document.getElementById('record-btn');
        recordBtn.classList.remove('active');
        recordBtn.innerHTML = '⏺ REC';
        
        console.log('Recording stopped');
    }
    
    async processRecording() {
        if (this.recordedChunks.length === 0) return;
        
        const blob = new Blob(this.recordedChunks, { type: 'audio/webm;codecs=opus' });
        
        try {
            const wavBlob = await this.convertToWav(blob);
            this.downloadRecording(wavBlob);
        } catch (error) {
            console.error('Error processing recording:', error);
            this.downloadRecording(blob, 'webm');
        }
    }
    
    async convertToWav(webmBlob) {
        const arrayBuffer = await webmBlob.arrayBuffer();
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        
        const wavBuffer = this.audioBufferToWav(audioBuffer);
        return new Blob([wavBuffer], { type: 'audio/wav' });
    }
    
    audioBufferToWav(buffer) {
        const length = buffer.length;
        const numberOfChannels = buffer.numberOfChannels;
        const sampleRate = buffer.sampleRate;
        
        const arrayBuffer = new ArrayBuffer(44 + length * numberOfChannels * 2);
        const view = new DataView(arrayBuffer);
        
        const writeString = (offset, string) => {
            for (let i = 0; i < string.length; i++) {
                view.setUint8(offset + i, string.charCodeAt(i));
            }
        };
        
        writeString(0, 'RIFF');
        view.setUint32(4, 36 + length * numberOfChannels * 2, true);
        writeString(8, 'WAVE');
        writeString(12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numberOfChannels, true);
        view.setUint32(24, sampleRate, true);
        view.setUint32(28, sampleRate * numberOfChannels * 2, true);
        view.setUint16(32, numberOfChannels * 2, true);
        view.setUint16(34, 16, true);
        writeString(36, 'data');
        view.setUint32(40, length * numberOfChannels * 2, true);
        
        let offset = 44;
        for (let i = 0; i < length; i++) {
            for (let channel = 0; channel < numberOfChannels; channel++) {
                const sample = Math.max(-1, Math.min(1, buffer.getChannelData(channel)[i]));
                view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7FFF, true);
                offset += 2;
            }
        }
        
        return arrayBuffer;
    }
    
    downloadRecording(blob, format = 'wav') {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const filename = `verse-recording-${timestamp}.${format}`;
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;
        
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url);
        
        console.log(`Recording downloaded as: ${filename}`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.sequencer = new VerseSequencer();
});
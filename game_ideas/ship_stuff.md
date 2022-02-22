# Spaceship

## Scenarios

- Boarding
  - To cause havoc / steal things / take the ship

- Equipment Failure
  - Power Generation
  - Networking
    - Complete loss of connectivity (modules become severed/autonomous, zero control)
    - Loss of trust (module temporarily unavailable)
    - Reduced Redundancy (warnings)
    - Reduced Bandwidth/Capacity (reduced or lose module functionality)
  - Computer
    - Lots of failure modes here:
      - Full shutdown (hands on fix required)
      - Core/Mem malfunction - reboots (temporary shutdown)
      - Reduced performance (reduced or lose module functionality)
      - Active effects from hacks/virus/etc.
  - Mechanical
    - Fatigue
      - General Wear / Radiation damage
      - Integrity Maintenance/Overhauls
    - Overstress 
      - Thermal/Kinetic induced fracturing

  - Failure Effects:
    - Vary by equipment
    - Complete failure vs. degradation - some equip can go autononmous, others lose control, others die
    - Equipment Links (PowerProvider, NetworkProvider)
      - Redundancy based on ship networking capacity and module design (2x - 4x redundant).

- Hull Breach
  - Ship Layers
    - Armor/Plating Breach
      - Inner hull exposure
      - Thermal radiation performance progressive degradation
    - Inner Hull Breach
      - Equipment issues occur
    - Sealed Room Breach
      - Atmosphere/Life Support fail 
        - room isolation

- Computer Issues
  - Virus/Hacks
  - Reboot/Repair/Troubleshoot
  - Buggy Firmware (Firmware quality - risk v. reward) 

- Piracy
  - Cargo Theft
  - Data Theft
  - Passenger Theft/Kidnapping
  - Ship Theft (see boarding)

- Overheat/Coolant
  - LaForge Coolant Leak -> Limited Supply
    - If run out, massively reduced power generation/safe mode 
    - Thermal management switches entirely to armor plate radiative output 
    - Huge FAIRS - with no power generation, yikes.
    - Can be replenished slowly once leak is fixed.
    - Power generation does not return to normal until coolant minimums replenished and FAIRS is switched back to dedicated thermal arrays (DTA) when equipped. 
- Cold/Silent Running
  - Power Modes
    - Very Low Power Mode / Balanced Operation
    - Combat Emergency Power Silent Running - Heat buildup
  - Coolant thermal capacity limit behavior
    - Cooling system quality advises how much heat the coolant can absorb before it needs to start bleeding heat off.
      - VLPM -> should get 5-30 minutes of runtime based on quality of components.
      - CEPSR -> 10-30 seconds of full power stalking before full armor IR signature 
    - Excess heat will bleed into armor plating once limit is reached
    - Armor plating thermal limit is fairly high but thermal signature increases
      - This is the 'Full Armor IR' signature - very easy for even crappy sensors to passively detect
      - Higher-end vessels, in contrast, will have dedicated thermal arrays (DTA) that are shielded, requiring active scanning to target long-range.

## Features

### Scanning 

- Active vs Passive Scanning
  - Active scanners are incredibly accurate but give away position
    - Require little computing power and networking capacity
    - Immediate locking & tracking
    - Tracking breaks with countermeasures or silent running
  - Passive scanners are non-emissive granting stealth
    - Require additional computing power and networking 
    - Locking time penalty with distance
    - Only effective in a directional cone (quality = increased arc) 
    - Tracking break with sufficient acceleration/jerk.  Countermeasures/silent running way less effective

### Hacking

- Hacking Basics
  - How does hacking work?
    - Either via networked comms or via physical access
      - Distance plays a factor in networked attacks - sufficient latency will allow any computer system to detect and mitigate (with exceptions - long distance hacks on antiquated/very poorly secured things should be a thing)
    - In-range targets are actively scanned for exploitable attack surfaces
      - A good computer core will detect and begin to attempt to mitigate
    - Physical access bypasses scanning - the attacker will be granted trust/control of whatever physical system they have plugged into after completing a challenge.
      - On a failure the computer will register an internal threat and will begin to internally re-secure/isolate networking from that component.
        - The effect is that it will temporarily render the component useless to the ship
        - Trust can be re-established only once the attacker has been shut out (assuming they have not breached another system)
      - On a perfect challenge completion, trust is maintained and the attacker can begin to extend their hack to challenge another module or simply choose to shut down the module.
        - The time cost for a ship to reboot and recover a sabotaged module is proportional to its security score.  

  - Systems on a ship are scored on a few dimensions:
    - Physical Access Mitigation
      - Challenge
        - Module software quality
        - Increases Compute req.
        - Tougher challenges take more time for hacker to physically complete.
        - At expense of very long re-trust time.
    - Hardened
      - Attack Surface Reduction 
        - Basic module firmware quality
      - Code Quality
        - Basic module functional software quality
        - Code Quality also scores against bugs/reliability
    - Denial Mitigation
      - Redundancy
        - Part of a modules' physical design
        - Increases Network Req.
      - Compression
        - Module Firmware Quality
        - Reduces Network Req.
        - Increases Compute Req. 
    - Encryption
      - Strength
        - Module firmware quality
        - Module hardware quality
        - Module software quality
        - Increases Compute req. 
  
  - There's a theme appearing above that indicates the types of vectors that can be exploited
    - Hacking modules could focus on one or more various types of vulnerabilities:
      - Software glitch/bug bypasses 
        - input validation, injection, crashing, open ports, fuzzing, etc (don't need to go into detail with the player on this)  
      - Attacks based on lack of firmware mitigations 
        - Mem protection bypasses, rowhammer type attacks
      - Hardware vulnerabilities
        - opcode + register bugs, maintenance/manufacturer jtag/serial interfaces, EM signature

  - What's the point? (Gameplay)
    - Ship to Ship hacking
      - Defensive/offensive gameplay / combat - gain advantage, antagonize.
      - Data exfiltration / Intelligence (stealth recon hacker) - mission/quest gameplay
      - Piracy (steal some cargo)
      - Transfer flag to ship (Ship theft)
    - Ship to Installation Hacking 
      - Signature spoofing - Override landing/docking security - go where you shouldn't be able to go
      - Data exfiltration / intelligence
      - Reduce defenses - make the situation survivable
      - Piracy (make space station barf valuables)
    - Long-range hacking of old fortresses/space stations/ground installations
      - Low-tech installations are more suceptible to high-latency hacks
      - Some rely on sheer firepower to defend - hacking is one way to ensure you're not vaporized on entry.
      - Allows ship to enter defensive perimeter
      - Possible to transfer flag to legacy installation for capture
        - Upgrade systems to defend against others with the same idea

## Teamwork

- Roles and Specialties
  - Any ship should be able to be equipped with enough to get things done (perhaps not always ideally)
  - Ship characteristics are going to make them fall into a 'meta' - recognize that and allow for interesting builds
  - No single ship should be able to do EVERYTHING very well
    - We want scenarios where it's quite difficult for a multi-role to complete alone
    - Solo players may be locked out of some content entirely
    - The rewards for teamwork should not radically exceed the rewards for solo play
      - Inversely, working on team shouldn't be punished for doing so
  - Risk vs. Reward should scale for both solo & teams
    - Remember that players tend to measure in Profit-Per-Hour 
    - The profit per hour for a solo player should be similar to each player on a team
      - The benefits to teamwork should be: 
        - Reduced risk/better survivability
        - Teamwork-oriented mission provide teamwork-oriented rewards (squad buffs, team healing, etc)
        - Solo-oriented missions provide solo-oriented rewards (multirole buffs, self-repair, etc)
      - Peak rewards are super-specialist gear that are valuable for both (base stats of them help make solo survivable + really excel at something)
      - A ship loaded up with peak-reward solo gear should probably be able to survive low/medium level team missions but not endgame team missions.

- Exploration
  - Astrometrics
  - Physics
  - Exoplanetary Research
    - Terraforming Potential
    - Exobiology
      - Fauna
      - Flora
    - Ecosystems
    - Meteorology
    - Magnetospherics
    - Geology
      - Plate Movement
      - Tectonics/Seismology
      - Layers & Core Research
    
## Interactions

- Docking
  - Mothership / Fighter
  - Carrier / Cruiser
  - Spacedock / Carrier|Cruiser
  - Station / Cruiser

- 

    
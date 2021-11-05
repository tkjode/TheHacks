# Planet-Scale Computing

## Introduction

A theoretical design for architecture-less hyper-scaled collective computation, storage and recall. 

## Concepts

First, we break down 'computing' into the absolute fundamental building blocks - the barest of metals:

`INPUT -> INSTRUCTION -> OUTPUT`

From this absolute bare minimum, computing technology began the simplest Turing machines running on mechanical switches and light-bulb registers, and has progressed in a relatively short period of time to incredibly complex instruction sets, a wide array of storage mechanisms and incredibly fast cores specializing in complex mathematics, motion video encoding, hashing, encryption and more.

As we encounter physical limits in electronics like die-size, or clock rates, we branch to parallelism to increase the throughput of instructions executed.  At the bare metal, new specialist electronics structures appear to help orchestrate the execution to ensure the best effective utilization of resources.   As we encounter bare-metal parallelism limits like thermal design capacity, data throughputs of device interconnect busses, and others, we then scale up with additional machines, which then push the limits of the next-higher order in the contemporary data processing ecosystem.

Without regard to scale, there are a few fundamental metrics and limits to performance we can attempt to address directly:

- Time to execute `INSTRUCTION`
- Throughput of `OUTPUT`

Time is required to operate on data.  Architectures use combinations of `INSTRUCTION` opcodes and `OUTPUT` (registers) to transform and migrate data.  For efficiency or specialization, complex architectures may attach multiple types of bus access directly to the processor outputs, optionally tethering them to a separate clock, allowing CPUs to continue on with other instructions.   Wherever asynchronous designs and parallelism are encountered, some level of orchestration is required, driving overall design complexity up.  

'Time' isn't actually very useful in terms of a performance variable.  Different workloads, use-cases and scenarios in the computing realm have very different requirements on 'Time', many subjective in terms of percevied performance, and others that are objectively stringent like real-time measurements in science and industry where latency can manifest in unacceptable error.  

Another concept is Pre-Emptive or Speculative Execution, where a CPU may be designed to leverage 'waiting time', or otherwise unused and available core cycles to pre-emptively execute anticipated instructions and cache output results - effectively precognitively creating a lookup-table of possible results if a particular OPCODE+REGISTER arrangement appears as the next instruction.  Potentially wasted or unused clock cycles push possibilities into a cache that is designed to be faster to copy results to register than actually running that OPCODE at the time it's received in the program counter later on.  Security issues have been popular recently due to malicious capture of the speculation cache to yield data that a process would otherwise not have any ability to access in an otherwise multi-process protected-memory environment.  

Orchestration has been mentioned a few times, and it is also an important concept to bear in mind once we scale up beyond single core + single process pipeline architectures.  Orchestration is borne from the need to ensure operations are performed in a manner that occupies the devices at very high efficiencies, and avoid exception conditions that may result in unstable operation, data-loss, or blocking.

## Goal


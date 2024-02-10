<x-app-layout>

    <x-slot name="header">
        <h1>
            Hello world!
        </h1>
    </x-slot>

    <div class="container">
        <p>
            This is the example view in the skeleton app!
        </p>

        <p class="mt-5">Here's a Livewire component from the skeleton.</p>
        <livewire:counter/>

        <p class="mt-5">And here's a Livewire component from the module template:</p>
        <livewire:my-counter/>

    </div>
</x-app-layout>

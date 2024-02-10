<?php

namespace App\Providers;

use App\Livewire\Counter;
use Illuminate\Support\ServiceProvider;
use Livewire;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Livewire::component('counter', Counter::class);
    }
}

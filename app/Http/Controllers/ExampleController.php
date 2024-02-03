<?php

namespace App\Http\Controllers;

use Eclipse\Core\Foundation\Http\Controllers\AbstractController;
use Illuminate\Contracts\Support\Renderable;

class ExampleController extends AbstractController
{
    public function show(): Renderable
    {
        return view('example');
    }
}

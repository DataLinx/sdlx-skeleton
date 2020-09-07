<?php

namespace Tests\Feature;

use Ocelot\Core\Testing\AppTestCase;

class ExampleTest extends AppTestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}

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
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');

        $response->assertStatus(302);
    }
}

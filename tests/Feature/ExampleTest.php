<?php

use Eclipse\Core\Models\User;

test('example page requires login', function () {
    $response = $this->get('/example');

    $response->assertStatus(302);
});

test('logged in user can access example page', function () {
    $response = $this->actingAs(User::factory()->make())->get('/example');

    $response->assertStatus(200);
});

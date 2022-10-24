<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Jokes>
 */
class JokesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'joke_content' => $this->faker->sentence() ,
            'liked'        => $this->faker->numberBetween(0,10000000),
        ];
    }
}

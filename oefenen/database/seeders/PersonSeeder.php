<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class PersonSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('people')->insert([
            'name' => 'Bob',
            'occupation' => "teacher",
            'job_description' => "tesfdsf",
            'created_at' => '2015-10-28 19:18:44',
            'updated_at' => '2015-10-28 19:18:44'
        ]);
    }
}

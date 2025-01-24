<?php

namespace Tests\Mock;

class ExternalService
{
    public function send()
    {
        if (rand(1, 10) > 6) {
            abort(500);
        }

        sleep(8);
        
        return response()->json(['status' => 'success']);
    }
}

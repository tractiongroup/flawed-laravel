<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Jobs\ProcessNewsletter;

class NewsletterController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate(['campaign_id' => 'required|integer']);

        Http::post('https://api-external.com/send', $validated);

        ProcessNewsletter::dispatchSync($validated);

        return response()->json(['message' => 'Newsletter scheduled']);
    }
}

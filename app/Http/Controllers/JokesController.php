<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Log;
use Exception;
use App\Models\Jokes;

class JokesController extends Controller
{
    //
    public function getJokeDetail()
    {
        try{
            $Jokes = Jokes::orderBy('id')->get();
            return response()->json($Jokes) ;
        }
        catch(Exception $e)
        {
            log::error($e);
        } 
    }
}

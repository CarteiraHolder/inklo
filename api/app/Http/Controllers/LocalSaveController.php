<?php

namespace App\Http\Controllers;

use App\Services\LocalSaveService;
use App\Services\GitService;

use GuzzleHttp\Client;


class LocalSaveController extends Controller
{
    
    public function LocalSave(string $login)
    {
        $GitService = new GitService(new Client());
        $LocalSaveService = new LocalSaveService($GitService);

        return $LocalSaveService->SaveFile($login);
    }
}

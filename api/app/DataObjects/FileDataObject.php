<?php

namespace App\DataObjects;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Response;

class FileDataObject 
{
    public function jsonFileDownload(array $user, string $login)
    {
        
        Storage::disk('public')->put($login .'.json', json_encode($user));
        
	    $file = storage_path('app/public/' . $login . '.json');

        $headers = array(
            "Content-Transfer-Encoding: Binary",
            'Content-Type: octet-stream',
            'Content-Disposition' => "attachment; filename='". basename($file) . "'",
        );

        return Response::download($file, $login.".json", $headers);

	}
}

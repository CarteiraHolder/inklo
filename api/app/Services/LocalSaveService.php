<?php

namespace App\Services;

use App\Interfaces\GitInterface;
use App\DataObjects\FileDataObject;

class LocalSaveService
{
    private GitInterface $GitInterface;
    private array $GitResponse;

    public function __construct(GitInterface $GitInterface) {
        $this->GitInterface = $GitInterface;
    }

    public function SaveFile(string $login)
    {
        $this->GitResponse = $this->GitInterface->call($login);
        $FileDataObject = new FileDataObject();
        return $FileDataObject->jsonFileDownload($this->GitResponse, $login);
    }
}

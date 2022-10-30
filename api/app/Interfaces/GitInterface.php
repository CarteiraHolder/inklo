<?php

namespace App\Interfaces;

interface GitInterface 
{
    public function call(string $login ) : array;
}
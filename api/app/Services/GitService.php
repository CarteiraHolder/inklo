<?php

namespace App\Services;

use App\Interfaces\GitInterface;
use App\Domains\GitDomain;


use GuzzleHttp\Client;

class GitService  implements GitInterface, GitDomain
{
    private Client $httpClient;
    private array $httpHeaders;

    public function __construct(Client $httpClient) {
        $this->httpClient = $httpClient;
        $this->httpHeaders = [ 
            'headers' => [ 
                'Authorization' => "Bearer " . self::API_KEY 
            ] 
        ];
    }

    public function call(string $login) : array
    {   
        $user = $this->getUser($login);
        $repos = $this->getRepos($login);

        $ResponseArray = [
            "user" => $user,
            "repos" => $repos
        ];

        return $ResponseArray;
    }

    private function getUser(string $login) : object
    {
        $url = self::URL . $login;
        try {
            $request = $this->httpClient->get($url, $this->httpHeaders);
            $response = json_decode($request->getBody()->getContents());
        } catch (\Throwable $th) {
            return json_encode(["name" => ""]);
        }

        return $response;
    }

    private function getRepos(string $login) : array
    {
        $url = self::URL . $login . self::URL_REPOS;
        try {
            $request = $this->httpClient->get($url, $this->httpHeaders);
            $response = json_decode($request->getBody()->getContents());
        } catch (\Throwable $th) {
            return [];
        }

        return $response;
    }
    
}

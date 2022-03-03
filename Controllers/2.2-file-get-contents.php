<?php

class ApiCall
    {
        public $domain = "https://randomuser.me/api";
        public $response;

        public function setStringContent()
        {
            $this->response = file_get_contents($this->domain);
            $this->response = ($this->response);
            return $this->response;
        }
    }
    
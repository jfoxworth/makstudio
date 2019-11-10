<?php

namespace App\Listeners;

use App\Events\QuoteRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;


class SendQuoteEmail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  QuoteRequest  $event
     * @return void
     */
    public function handle(QuoteRequest $event)
    {

    	echo('In event listener'); 

		$request_body = json_decode('{
		  "personalizations": [
		    {
		      "to": [
		        {
		          "email": "jfoxworth@cadwolf.com"
		        }
		      ],
		      "subject": "Hello World from the SendGrid PHP Library!"
		    }
		  ],
		  "from": {
		    "email": "quote@makstudio.com"
		  },
		  "content": [
		    {
		      "type": "text/plain",
		      "value": "Hello, Email!"
		    }
		  ]
		}');

		$apiKey = getenv('SENDGRID_API_KEY');
		$sg = new \SendGrid($apiKey);

		$response = $sg->client->mail()->send()->post($request_body);
		echo $response->statusCode();
		echo $response->body();
		echo $response->headers();

    	echo('End of event listener'); 
    }
}

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

    	$emailText =  "sup sucka";

    	if ( $event->build['build_id'] == "fossil" )
    	{

				$emailText = '<table><tr>
						<th>Quantity</th>
						<th>Amount</th>
					</tr>

					<tr>
						<td>Width of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Width'].'</td>
					</tr>

					<tr>
						<td>Height of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Height'].'</td>
					</tr>

					<tr>
						<td>Fossil Shape Count</td><td>'.$event->build['build_data']['componentValues']['Shape Count'].'</td>
					</tr>

					<tr>
						<td>Fossil Factor</td><td>'.$event->build['build_data']['componentValues']['Factor'].'</td>
					</tr>

					<tr>
						<td>Price</td><td>'.$event->build['build_data']['price'].'</td>
					</tr>

				</table>';

    	}

    	echo($emailText);

		$request_body = json_decode('{
		  "personalizations": [
		    {
		      "to": [
		        {
		          "email": "jfoxworth@cadwolf.com"
		        }
		      ],
		      "subject": "Your quote from the Mak Studio"
		    }
		  ],
		  "from": {
		    "email": "quote@makstudio.com"
		  },
		  "content": [
		    {
		      "type": "application/json",
		      "value": '.$emailText.'
		    }
		  ]
		}');

		$apiKey = getenv('SENDGRID_API_KEY');
		$sg = new \SendGrid($apiKey);

		$response = $sg->client->mail()->send()->post($request_body);
		echo $response->statusCode();
		echo $response->body();
		echo $response->headers();

    }
}

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

				$emailText = '<table class="modalTable center"
					   style="width:500px; margin-left:25px">

					<tr style="height:35px; border-bottom:1px solid #ccc; font-weight:bold">
						<th style="width:300px">Quantity</th>
						<th>Amount</th>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Width of Wall</td><td id="fossilWidthQuote">'.$event->build['build_data']['componentValues']['Wall Width'].'</td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Height of Wall</td><td id="fossilHeightQuote">'.$event->build['build_data']['componentValues']['Wall Height'].'</td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Fossil Shape Count</td><td id="fossilShapeCountQuote">'.$event->build['build_data']['componentValues']['Shape Count'].'</td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Fossil Factor</td><td id="fossilFactorQuote">'.$event->build['build_data']['componentValues']['Factor'].'</td>
					</tr>

					<tr style="height:30px; background-color:#888; color:#fff">
						<td>Price</td><td id="fossilModalPriceQuote">'.$event->build['build_data']['price'].'</td>
					</tr>

				</table>';

    	}


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

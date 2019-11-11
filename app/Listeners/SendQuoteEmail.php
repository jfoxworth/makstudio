<?php

namespace App\Listeners;

use App\Events\QuoteRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use SendGrid;
use Illuminate\Support\Facades\Auth;

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

    	$emailText =  '';

    	if ( $event->build['build_id'] == "fossil" )
    	{

				$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your fossil wall quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


				<table class=\"modalTable center\"
					   style=\"width:500px; margin-left:25px\">

					<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
						<th style=\"width:300px\">Quantity</th>
						<th>Amount</th>
					</tr>

					<tr style=\"height:30px; border-bottom:1px solid #ccc\">
						<td>Width of Wall</td><td id=\"fossilWidthQuote\">'.$event->build['build_data']['componentValues']['Wall Width'].'</td>
					</tr>

					<tr style=\"height:30px; border-bottom:1px solid #ccc\">
						<td>Height of Wall</td><td id=\"fossilHeightQuote\">'.$event->build['build_data']['componentValues']['Wall Height'].'</td>
					</tr>

					<tr style=\"height:30px; border-bottom:1px solid #ccc\">
						<td>Fossil Shape Count</td><td id=\"fossilShapeCountQuote\">'.$event->build['build_data']['componentValues']['Shape Count'].'</td>
					</tr>

					<tr style=\"height:30px; border-bottom:1px solid #ccc\">
						<td>Fossil Factor</td><td id=\"fossilFactorQuote\">'.$event->build['build_data']['componentValues']['Factor'].'</td>
					</tr>

					<tr style=\"height:30px; background-color:#888; color:#fff\">
						<td>Price</td><td id=\"fossilModalPriceQuote\">'.$event->build['build_data']['price'].'</td>
					</tr>

				</table></body></html>';


    	}


    	echo($event->email);

		$from = new SendGrid\Email(null, "quotes@makstudio.us");
		$subject = "Your quote from Mak Studio";
		$to = new SendGrid\Email(null, $event->email);
		$content = new SendGrid\Content("text/html", $emailText);
		$mail = new SendGrid\Mail($from, $subject, $to, $content);

		$apiKey = getenv('SENDGRID_API_KEY');
		$sg = new \SendGrid($apiKey);

		$response = $sg->client->mail()->send()->post($mail);
		echo $response->statusCode();
		echo $response->headers();
		echo $response->body();


    }
}

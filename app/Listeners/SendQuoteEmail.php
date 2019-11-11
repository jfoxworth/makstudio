<?php

namespace App\Listeners;

use App\User;
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
					<td>Width of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Width'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Height of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Height'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Fossil Shape Count</td><td>'.$event->build['build_data']['componentValues']['Shape Count'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Fossil Factor</td><td>'.$event->build['build_data']['componentValues']['Factor'].'</td>
				</tr>

				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>'.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';


		}elseif ( $event->build['build_id'] == "flower" )
		{

			$flowerText = '';
			$flowerIndex = 1;

			foreach ($event->build['build_data']['componentValues']['flowersJSON']['flowers'] as $key => $value)
			{
				$flowerText = $flowerText+'<tr>';
					$flowerText = $flowerText+'<td>'.$flowerIndex.'</td>';
					$flowerText = $flowerText+'<td>Size -'.$event->build['build_data']['componentValues']['flowerJSON']['flowers'][$key]['size'].'</td>';
					$flowerText = $flowerText+'<td>Rotation - '.$event->build['build_data']['componentValues']['flowerJSON']['flowers'][$key]['rotation'].'</td>';
					$flowerText = $flowerText+'<td>X - '.$event->build['build_data']['componentValues']['flowerJSON']['flowers'][$key]['position'][0].'</td>';
					$flowerText = $flowerText+'<td>Y - '.$event->build['build_data']['componentValues']['flowerJSON']['flowers'][$key]['position'][1].'</td>';
				$flowerText = $flowerText+'</tr>';
			}

			$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your flower wall quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


			<table class=\"modalTable center\"
				   style=\"width:500px; margin-left:25px\">

				<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
					<th style=\"width:300px\">Quantity</th>
					<th>Amount</th>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Width of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Width'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Height of Wall</td><td>'.$event->build['build_data']['componentValues']['Wall Height'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Flower positions</td><td></td>
				</tr>

				'.$flowerText.'

				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>'.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';


		}elseif ( $event->build['build_id'] == "backlit" )
		{

			$emailText = '<html><head></head><body><h1>Your Quote from Mak Studios</h1><div><p>The table below shows the dimensions and settings that you selected for your backlit wall quote. Remember that these are quotes and are subject to taxes and other fees. You can <a href="http://www.makstudios.us/register">create an account</a> if you do not already have one, or <a href="http://www.makstudios.us/login">login</a> to see all of you models.</p></div>


			<table class=\"modalTable center\"
				   style=\"width:500px; margin-left:25px\">

				<tr style=\"height:35px; border-bottom:1px solid #ccc; font-weight:bold\">
					<th style=\"width:300px\">Quantity</th>
					<th>Amount</th>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Length of Wall</td><td>'.$event->build['build_data']['componentValues']['LENGTH OF WALL'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Height of Wall</td><td>'.$event->build['build_data']['componentValues']['Height of Wall'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Show Logo</td><td>'.$event->build['build_data']['componentValues']['Logo?'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo Scale</td><td>'.$event->build['build_data']['componentValues']['Logo Scale'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo X Location</td><td>'.$event->build['build_data']['componentValues']['Logo X Location'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Logo Z Location</td><td>'.$event->build['build_data']['componentValues']['Logo Z Location'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Create Flat Area</td><td>'.$event->build['build_data']['componentValues']['Create Flat Area?'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Wave Metalness</td><td>'.$event->build['build_data']['componentValues']['Wave Metalness'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Wave Roughness</td><td>'.$event->build['build_data']['componentValues']['Wave Roughness'].'</td>
				</tr>

				<tr style=\"height:30px; border-bottom:1px solid #ccc\">
					<td>Wave Amplitude</td><td>'.$event->build['build_data']['componentValues']['Wave Amplitude'].'</td>
				</tr>

				<tr style=\"height:30px; background-color:#888; color:#fff\">
					<td>Price</td><td>'.$event->build['build_data']['price'].'</td>
				</tr>

			</table></body></html>';

		}elseif ( $event->build['build_id'] == "bench" )
		{

		}elseif ( $event->build['build_id'] == "faceted" )
		{


		}


		if ( $event->email == '' )
		{
			$user = User::findOrFail(Auth::id());
			$userEmail = $user->email;
		}else
		{
			$userEmail = $event->email;
		}


		$from = new SendGrid\Email(null, "quotes@makstudio.us");
		$subject = "Your quote from Mak Studio";
		$to = new SendGrid\Email(null, $userEmail);
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

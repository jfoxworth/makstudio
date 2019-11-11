<?php

namespace App\Listeners;

use App\Events\QuoteRequest;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Build;
use App\Instance;
use App\Action;
use Illuminate\Support\Facades\Auth;




class StoreQuoteAction
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

		if (isset($event->build->id)) 
		{
			$thisBuildID = $event->build->id;
		}else
		{
			$thisBuildID = '';
		}

		if (isset($event->build)) 
		{
			$thisBuild = $event->build;
		}else
		{
			$thisBuild = '';
		}

		if (isset($event->build['instance_id']) ) 
		{
			$thisInstanceID = $event->build['instance_id'];
		}else
		{
			$thisInstanceID = 0;
		}

		if (isset(Auth::id()))
		{
			$userID = Auth::id();
		}else
		{
			$userID = 'Anonymous';
		}

		$thisAction = new Action;
		$thisAction->design_type = (int)$event->build['build_num'];
		$thisAction->instance_id = $thisInstanceID;
		$thisAction->user_id = $userID;
		$thisAction->action = 'Quote Requested';
		$thisAction->info = json_encode(array('build_id' => $thisBuildID, 'build' => $thisBuild));
		$thisAction->save();

	}
}

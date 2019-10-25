<?php

namespace App\Http\Controllers;

use App\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class MessageController extends Controller
{
	/**
	 * Display a listing of the resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function index( $offset, $type )
	{
		if ( $type == 0 )
		{
			return Message::orderBy('id', 'desc')->skip( $offset * 20 )->where('status', '=', 0)->take(20)->get();
		
		}else
		{
			return Message::orderBy('id', 'desc')->skip( $offset * 20 )->take(20)->get();
		}

	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return \Illuminate\Http\Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @return \Illuminate\Http\Response
	 */
	public function store(Request $request)
	{

		$thisMessage = new Message;
		$thisMessage->message_data = json_encode($request['message']);
		$thisMessage->user_id = Auth::id();
		$thisMessage->save();
		
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  \App\Message  $message
	 * @return \Illuminate\Http\Response
	 */
	public function show( )
	{
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  \App\Message  $message
	 * @return \Illuminate\Http\Response
	 */
	public function edit(Message $message)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \App\Message  $message
	 * @return \Illuminate\Http\Response
	 */
	public function update(Request $request, Message $message)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  \App\Message  $message
	 * @return \Illuminate\Http\Response
	 */
	public function destroy(Message $message)
	{
		//
	}
}

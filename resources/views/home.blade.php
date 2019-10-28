@extends('layouts.app')

@section('content')
<div class="container">
	<div class="row justify-content-center">
		<div class="col-md-8">
			<div class="card">
				<div class="card-header">My Designs</div>

				<div class="card-body">
					@if (session('status'))
						<div class="alert alert-success" role="alert">
							{{ session('status') }}
						</div>
					@endif

					<p>You are logged in! To start a new design, go to the <a href="/designStudio">Design Studio</a>. To edit an existing design or purchase that design, click on that design below.</p>


					<table style="width:100%; text-align:center;">
						<tr style="background-color:#ccc">
							<th>Number</th><th>Model Type</th><th>Model Name</th><th>Date Created</th>
						</tr>
						@foreach ($instanceData as $instance)

							<tr style="border-bottom:1px solid #ccc">
								<td>{{$loop->iteration}}</td>

								@if ( $instance->design_type == 2 )
									<td>Planter Bench</td>
								@elseif ( $instance->design_type == 3 )
									<td>Fin Wall</td>
								@elseif ( $instance->design_type == 4 )
									<td>Backlit Wall</td>
								@elseif ( $instance->design_type == 5 )
									<td>Faceted Wall</td>
								@elseif ( $instance->design_type == 6 )
									<td>Light Wall</td>
								@elseif ( $instance->design_type == 7 )
									<td>Office Desk</td>
								@elseif ( $instance->design_type == 8 )
									<td>Planter Wall</td>
								@elseif ( $instance->design_type == 9 )
									<td>Panel Wall</td>
								@else
									<td></td>
								@endif
								
								<td><a href="/buildStudio/{{$instance->id}}">{{$instance->name}}</a></td>
								<td>{{$instance->created_at}}</td>
							</tr>

						@endforeach
					</table>


				</div>
			</div>
		</div>
	</div>
</div>
@endsection

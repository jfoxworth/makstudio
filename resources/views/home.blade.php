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


                    @foreach ($instanceData as $instance)

                        <div>
                            <div>$loop->iteration</div>
                            <div><a href="/buildStudio/{{$instance->id}}">{{$instance->name}}</a></div>
                            <div>{{$instance->created_at}}</div>
                        </div>

                    @endforeach


                </div>
            </div>
        </div>
    </div>
</div>
@endsection

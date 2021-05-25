@if (count($errors) > 0)
    @foreach ($errors->all() as $error)
        <div class="alert alert-danger w-50 ml-auto mr-auto mt-3">
            {{$error}}
        </div>
    @endforeach
@endif 

@if (session('success'))
    <div class="alert alert-success w-50 ml-auto mr-auto mt-2">
        {{session('success')}}
    </div>
@endif

@if (session('error'))
    <div class="alert alert-danger w-25 ml-auto mr-auto mt-2">
        {{session('error')}}
    </div>
@endif

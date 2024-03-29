﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoTrade.Core;
using AutoTrade.Core.JsonModels;
using AutoTrade.Db.Enums;
using AutoTrade.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AutoTrade.Controllers
{
	[Route("[controller]")]
	[ApiController]
	[Authorize(Roles = "Admin")]
	public class AdminController : Controller
	{
		private readonly IUserService _userService;
		private readonly IVehicleService _vehicleService;
		private readonly ICommonService _commonService;


		public AdminController(
			IUserService userService,
			IVehicleService vehicleService,
			ICommonService commonService)
		{
			_userService = userService;
			_vehicleService = vehicleService;
			_commonService = commonService;
		}


		[HttpPost("[action]")]
		public IActionResult AddVehicleMake(VehicleMakeJsonModel model)
		{
			bool isAdded = false;
			if (!string.IsNullOrEmpty(model.Name))
			{
				model.Name = model.Name.Trim();
				isAdded = _vehicleService.AddMake(model);
			}
			string error = isAdded ? Messages.INFO_ENTITY_ADDED : Messages.ERROR_ENTITY_EXISTS;
			return Json(new ResponseJsonModel(isAdded, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult RemoveVehicleMake(VehicleMakeJsonModel model)
		{
			bool isDeleted = _vehicleService.RemoveMake(model.Id);
			string error = isDeleted ? Messages.INFO_ENTITY_DELETED : Messages.ERROR_DELETE_PROBLEM;
			return Json(new ResponseJsonModel(isDeleted, error: error));
		}


		[HttpPost("[action]")]
		public IActionResult AddVehicleModel(VehicleModelJsonModel model)
		{
			bool isAdded = false;
			if (!string.IsNullOrEmpty(model.Name))
			{
				model.Name = model.Name.Trim();
				isAdded = _vehicleService.AddModel(model);
			}
			string error = isAdded ? Messages.INFO_ENTITY_ADDED : Messages.ERROR_ENTITY_EXISTS;
			return Json(new ResponseJsonModel(isAdded, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult RemoveVehicleModel(VehicleModelJsonModel model)
		{
			bool isDeleted = _vehicleService.RemoveModel(model.Id);
			string error = isDeleted ? Messages.INFO_ENTITY_DELETED : Messages.ERROR_DELETE_PROBLEM;
			return Json(new ResponseJsonModel(isDeleted, error: error));
		}


		[HttpPost("[action]")]
		public IActionResult AddTown(CommonJsonModel model)
		{
			bool isAdded = false;
			if (!string.IsNullOrEmpty(model.Name))
			{
				model.Name = model.Name.Trim();
				isAdded = _commonService.AddTown(model);
			}
			string error = isAdded ? Messages.INFO_ENTITY_ADDED : Messages.ERROR_ENTITY_EXISTS;
			return Json(new ResponseJsonModel(isAdded, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult RemoveTown(CommonJsonModel model)
		{
			bool isDeleted = _commonService.RemoveTown(model.Id);
			string error = isDeleted ? Messages.INFO_ENTITY_DELETED : Messages.ERROR_DELETE_PROBLEM;
			return Json(new ResponseJsonModel(isDeleted, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult AddColor(CommonJsonModel model)
		{
			bool isAdded = false;
			if (!string.IsNullOrEmpty(model.Name))
			{
				model.Name = model.Name.Trim();
				isAdded = _commonService.AddColor(model);
			}
			string error = isAdded ? Messages.INFO_ENTITY_ADDED : Messages.ERROR_ENTITY_EXISTS;
			return Json(new ResponseJsonModel(isAdded, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult RemoveColor(CommonJsonModel model)
		{
			bool isDeleted = _commonService.RemoveColor(model.Id);
			string error = isDeleted ? Messages.INFO_ENTITY_DELETED : Messages.ERROR_DELETE_PROBLEM;
			return Json(new ResponseJsonModel(isDeleted, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult AddVehicleType(CommonJsonModel model)
		{
			bool isAdded = false;
			if (!string.IsNullOrEmpty(model.Name))
			{
				model.Name = model.Name.Trim();
				isAdded = _commonService.AddVehicleType(model);
			}
			string error = isAdded ? Messages.INFO_ENTITY_ADDED : Messages.ERROR_ENTITY_EXISTS;
			return Json(new ResponseJsonModel(isAdded, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult RemoveVehicleType(CommonJsonModel model)
		{
			bool isDeleted = _commonService.RemoveVehicleType(model.Id);
			string error = isDeleted ? Messages.INFO_ENTITY_DELETED : Messages.ERROR_DELETE_PROBLEM;
			return Json(new ResponseJsonModel(isDeleted, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult AddFuelType(CommonJsonModel model)
		{
			bool isAdded = false;
			if (!string.IsNullOrEmpty(model.Name))
			{
				model.Name = model.Name.Trim();
				isAdded = _commonService.AddFuelType(model);
			}
			string error = isAdded ? Messages.INFO_ENTITY_ADDED : Messages.ERROR_ENTITY_EXISTS;
			return Json(new ResponseJsonModel(isAdded, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult RemoveFuelType(CommonJsonModel model)
		{
			bool isDeleted = _commonService.RemoveFuelType(model.Id);
			string error = isDeleted ? Messages.INFO_ENTITY_DELETED : Messages.ERROR_DELETE_PROBLEM;
			return Json(new ResponseJsonModel(isDeleted, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult AddGearboxType(CommonJsonModel model)
		{
			bool isAdded = false;
			if (!string.IsNullOrEmpty(model.Name))
			{
				model.Name = model.Name.Trim();
				isAdded = _commonService.AddGearboxType(model);
			}
			string error = isAdded ? Messages.INFO_ENTITY_ADDED : Messages.ERROR_ENTITY_EXISTS;
			return Json(new ResponseJsonModel(isAdded, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult RemoveGearboxType(CommonJsonModel model)
		{
			bool isDeleted = _commonService.RemoveGearboxType(model.Id);
			string error = isDeleted ? Messages.INFO_ENTITY_DELETED : Messages.ERROR_DELETE_PROBLEM;
			return Json(new ResponseJsonModel(isDeleted, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult ChangeRole(UserJsonModel model)
		{
			bool isChanged = _userService.ChangeRole(model);
			string error = isChanged ? Messages.INFO_ENTITY_EDITED : Messages.ERROR_EDIT_PROBLEM;
			return Json(new ResponseJsonModel(isChanged, error: error));
		}

		[HttpPost("[action]")]
		public IActionResult RemoveUser(UserJsonModel model)
		{
			bool isDeleted = _userService.RemoveUser(model.Id);
			string error = isDeleted ? Messages.INFO_ENTITY_DELETED : Messages.ERROR_DELETE_PROBLEM;
			return Json(new ResponseJsonModel(isDeleted, error: error));
		}

		[HttpGet("[action]")]
		public IActionResult GetUsers(int page, int size, string search)
		{
			var users = _userService.GetUsers(page, size, search?.Trim());
			return Json(new ResponseJsonModel(true, users));
		}
	}
}